// app/routes/home.tsx
import { useState, useEffect } from 'react';
import '../app.css';

export default function Home() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Joke Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
      <button onClick={fetchJoke}>Get another joke</button>
    </div>
  );
}