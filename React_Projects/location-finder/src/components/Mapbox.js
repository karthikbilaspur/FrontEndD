// Mapbox.jsx
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Mapbox = ({ lng, lat, zoom }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    return () => map.remove();
  }, [lng, lat, zoom]);

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />
  );
};

export default Mapbox;