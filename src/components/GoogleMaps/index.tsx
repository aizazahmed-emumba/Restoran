import React from "react";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const GoogleMaps: React.FC = () => {
  const position = { lat: 37.7749295, lng: -122.4194155 };
  return (
    <APIProvider apiKey="AIzaSyADQ-a7w5YcExwYjcWOV9NJK92vWoKJVrI">
      <div style={{ height: "100%", width: "100%" }}>
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMaps;
