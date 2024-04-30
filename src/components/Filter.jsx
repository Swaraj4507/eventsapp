import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { BackgroundCircles } from "./design/Hero";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Filter = () => {
  const [radius, setRadius] = useState(2); // Default radius is 2km
  const [selectedPlace, setSelectedPlace] = useState(""); // Default place is empty
  const navigate = useNavigate();
  // { name: "Benz ircle", latitude: 40.7128, longitude: -74.006 },
  // 16.497722, 80.653780
  const places = [
    { name: "Benz circle", latitude: 16.497722, longitude: 80.65378 },

    {
      name: "Vijayawada Railway Station",
      latitude: 16.517968,
      longitude: 80.620439,
    },
    {
      name: "Undavalli",
      latitude: 16.491207,
      longitude: 80.601396,
    },
    { name: "Guntur", latitude: 16.306526, longitude: 80.436606 },
    // Add more places as needed
  ];

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleApplyFilter = () => {
    const selectedPlaceData = places.find(
      (place) => place.name === selectedPlace
    );
    const latitude = selectedPlaceData ? selectedPlaceData.latitude : "";
    const longitude = selectedPlaceData ? selectedPlaceData.longitude : "";
    const name = selectedPlaceData ? selectedPlaceData.name : "";
    // Redirect to Benefits component with selected filter values
    navigate(
      `/filteredevents?radius=${radius}&latitude=${latitude}&longitude=${longitude}&city=${name}`
    );
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Filter Events</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="radius" className="block mb-1">
                Radius (km):
              </label>
              <input
                type="number"
                id="radius"
                name="radius"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Enter radius"
                value={radius}
                onChange={handleRadiusChange}
              />
            </div>
            <div>
              <label htmlFor="place" className="block mb-1">
                Select a Place:
              </label>
              <select
                id="place"
                name="place"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                value={selectedPlace}
                onChange={handlePlaceChange}
              >
                <option value="">Select a place</option>
                {places.map((place) => (
                  <option key={place.name} value={place.name}>
                    {place.name}
                  </option>
                ))}
              </select>
            </div>
            <Button onClick={handleApplyFilter} className="w-full">
              Apply Filter
            </Button>
          </div>
        </div>
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </>
  );
};

export default Filter;
