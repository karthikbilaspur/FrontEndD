import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Map from './Map';
import './App.css'

const API_URL = 'https://ipapi.co/json/';

function App() {
  const [ipDetails, setIpDetails] = useState({});
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(API_URL);
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error...</p>;

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>

          <p>{ipDetails.city}, {ipDetails.region},
            {ipDetails.country_name}.</p>

          <h4>Internet Service Provider(ISP):</h4>

          <p>{ipDetails.org}</p>
        </div>
        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;