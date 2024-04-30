import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { distanceBetween } from "geofire-common";
import { getDatabase, ref, get } from "firebase/database";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { BackgroundCircles } from "./design/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { benefitIcon2 } from "../assets";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Events2 = () => {
  const db = getDatabase();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlRadius = queryParams.get("radius");
  const urlLatitude = queryParams.get("latitude");
  const urlLongitude = queryParams.get("longitude");
  const urlCity = queryParams.get("city");
  const [radius, setRadius] = useState(urlRadius); // Default radius is 1km
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const center = [urlLatitude, urlLongitude];
    const radiusInM = urlRadius * 1000; // Convert km to meters

    // Retrieve events data from the database
    const eventRef = ref(db, "events");
    get(eventRef).then((snapshot) => {
      const matchingDocs = [];

      snapshot.forEach((childSnapshot) => {
        const event = childSnapshot.val();
        const eventLocation = event.location.split(",").map(parseFloat);
        const distanceInKm = distanceBetween(eventLocation, center);
        const distanceInM = distanceInKm * 1000; // Convert km to meters

        // Check if the event is within the radius
        if (distanceInM <= radiusInM) {
          matchingDocs.push({
            id: childSnapshot.key,
            ...event,
            distance: distanceInKm,
          });
        }
      });

      // Update the state with matching events
      setEvents(matchingDocs);
    });
  }, [urlRadius, db]);

  const openMaps = (location) => {
    const [latitude, longitude] = location.split(",");
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };

  const navigateTo = (eventId) => {
    console.log(eventId);
    navigate(`/event/${eventId}`);
  };

  const handleAddEvent = () => {
    // Navigate to add event page
    navigate("/addevent");
  };

  const renderEvents = () => {
    if (events.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-lg mb-4">No events found.</p>
          <Button onClick={handleAddEvent} className="mt-2">
            Be the first one to add an event
          </Button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap gap-10 mb-10">
          {events
            .slice()
            .reverse()
            .map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[22rem]"
                style={{
                  backgroundImage: "url(./src/assets/benefits/card-1.svg)",
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                  <h5 className="h5 mb-5">{item.eventName}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.contactInfo}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={benefitIcon2}
                      width={48}
                      height={48}
                      alt={item.title}
                      onClick={() => openMaps(item.location)}
                      style={{ cursor: "pointer" }}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      <a
                        href=""
                        className="explore-more-link"
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                        onClick={() => {
                          navigateTo(item.id);
                        }}
                      >
                        Explore more
                      </a>
                    </p>
                    <Arrow />
                  </div>
                </div>

                {<GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-10">
                    {item.imageURL && (
                      <img
                        src={item.imageURL}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
        </div>
      );
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <div className="flex items-center justify-center">
          <h1 className="h3 mb-2">
            Showing Events at {urlCity} within {radius} Km radius
          </h1>
        </div>
        {renderEvents()}
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </Section>
  );
};

export default Events2;
