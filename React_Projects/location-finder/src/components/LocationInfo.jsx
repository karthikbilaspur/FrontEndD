// LocationInfo.jsx
import React from 'react';

const LocationInfo = ({ lng, lat, zoom }) => {
  return (
    <div>
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
  );
};

export default LocationInfo;