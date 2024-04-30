import React, { useEffect, useState } from "react";
import { ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useGeolocated } from "react-geolocated";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { BackgroundCircles } from "./design/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const AddEvent = () => {
  const auth = getAuth();
  const db = getDatabase();
  const storage = getStorage();
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState(false);
  const [contactInfo, setContactInfo] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [isEventHappening, setIsEventHappening] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [description, setDescription] = useState("");

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (coords && coords.latitude && coords.longitude) {
      setLocation(`${coords.latitude}, ${coords.longitude}`);
    }
  }, [coords]);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleOrganizerChange = (e) => {
    setOrganizer(e.target.checked);
  };

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleIsEventHappeningChange = (e) => {
    setIsEventHappening(e.target.checked);
    if (e.target.checked) {
      // If event is happening currently, set startTime to current date and time
      setStartTime(new Date().toISOString().slice(0, 16));
    } else {
      // Reset startTime if the event is not happening currently
      setStartTime(null);
    }
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || !image) return;

    const storageReference = storageRef(storage, `images/${image.name}`);
    uploadBytes(storageReference, image)
      .then((snapshot) => {
        getDownloadURL(storageReference)
          .then((downloadURL) => {
            const eventRef = ref(db, "events");
            push(eventRef, {
              userId: user.uid,
              eventName,
              organizer,
              contactInfo,
              location,
              imageURL: downloadURL,
              isEventHappening,
              startTime,
              endTime,
              description,
            })
              .then(() => {
                setEventName("");
                setOrganizer(false);
                setContactInfo("");
                setLocation("");
                setImage(null);
                setIsEventHappening(false);
                setStartTime(null);
                setEndTime(null);
                setDescription("");
                navigate("/events");
              })
              .catch((error) => {
                console.error("Error adding event: ", error);
              });
          })
          .catch((error) => {
            console.error("Error getting download URL: ", error);
          });
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Event Registration</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="eventName" className="block mb-1">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Enter event name"
                value={eventName}
                onChange={handleEventNameChange}
              />
            </div>
            <div>
              <label htmlFor="organizer" className="block mb-1">
                Are you an organizer?
              </label>
              <input
                type="checkbox"
                checked={organizer}
                onChange={handleOrganizerChange}
                className="h-5 mb-5"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-1">
                Upload Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full bg-n-11 border rounded-md py-2 px-3  "
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {image && (
                      <img
                        src={URL.createObjectURL(image)}
                        width={380}
                        height={362}
                        alt="Event Preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="contactInfo" className="block mb-1">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Enter contact information"
                value={contactInfo}
                onChange={handleContactInfoChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="block mb-1">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={location}
                readOnly
                className="w-full bg-n-11 border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="isEventHappening" className="block mb-1">
                Is the event currently happening?
              </label>
              <input
                type="checkbox"
                id="isEventHappening"
                checked={isEventHappening}
                onChange={handleIsEventHappeningChange}
                className="h-5 mb-5"
              />
            </div>
            {!isEventHappening && (
              <div>
                <label htmlFor="startTime" className="block mb-1">
                  Start Time:
                </label>
                <input
                  type="datetime-local"
                  id="startTime"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  className="w-full bg-n-11 border rounded-md py-2 px-3"
                />
              </div>
            )}
            <div>
              <label htmlFor="endTime" className="block mb-1">
                End Time:
              </label>
              <input
                type="datetime-local"
                id="endTime"
                value={endTime}
                onChange={handleEndTimeChange}
                className="w-full bg-n-11 border rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                rows={4}
                placeholder="Enter event description"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </>
  );
};

export default AddEvent;
