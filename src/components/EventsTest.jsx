import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { distanceBetween } from "geofire-common";
import { getDatabase, ref, get } from "firebase/database";

const EventsTest = () => {
  const db = getDatabase();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const [radius, setRadius] = useState(1); // Default radius is 1km
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
    <div>
      <h2>Events Nearby</h2>
      <label htmlFor="radius">Radius (km):</label>
      <input
        type="number"
        id="radius"
        value={radius}
        onChange={handleRadiusChange}
      />
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <img
              src={event.imageURL}
              alt={event.eventName}
              style={{ maxWidth: "100px" }}
            />
            <div>{event.eventName}</div>
            <div>{event.contactInfo}</div>
            <div>Distance: {event.distance.toFixed(2)} km</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsTest;
