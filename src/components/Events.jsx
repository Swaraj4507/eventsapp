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
import { benefitIcon1 } from "../assets";
const EventsTest = () => {
  const db = getDatabase();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const [radius, setRadius] = useState(10); // Default radius is 1km
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (coords) {
      const center = [coords.latitude, coords.longitude];
      const radiusInM = radius * 1000; // Convert km to meters

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
    }
  }, [coords, radius, db]);

  const handleRadiusChange = (e) => {
    const newRadius = parseInt(e.target.value, 10);
    setRadius(newRadius);
  };

  return (
    <Section id="events">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Events Nearby" />

        <div className="flex flex-wrap gap-10 mb-10">
          {events.map((event, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[22rem]"
              style={{
                backgroundImage: `url(./src/assets/benefits/card-${
                  (index % 6) + 1
                }.svg)`,
              }}
              key={event.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{event.eventName}</h5>
                <p className="body-2 mb-6 text-n-3">{event.contactInfo}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={event.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {event.light && <GradientLight />}{" "}
              {/* Apply light effect randomly */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#events)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {event.imageURL && (
                    <img
                      src={event.imageURL}
                      width={380}
                      height={362}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </Section>
  );
};

export default EventsTest;
