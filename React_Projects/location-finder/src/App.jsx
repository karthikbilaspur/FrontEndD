import React, { useState } from 'react';
import Mapbox from './components/Mapbox';
import Search from './components/Search';
import LocationInfo from './components/LocationInfo';

const App = () => {
  const [lng, setLng] = useState(78.9629);
  const [lat, setLat] = useState(20.5937);
  const [zoom, setZoom] = useState(4);

  return (
    <div>
      <Search setLng={setLng} setLat={setLat} />
      <Mapbox lng={lng} lat={lat} zoom={zoom} />
      <LocationInfo lng={lng} lat={lat} zoom={zoom} />
    </div>
  );
};

export default App;