import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Skeleton from './Skeleton';

function App({ initialData }) {
  const [data, setData] = useState(initialData || null);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://swapi.dev/api/planets');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [initialData]);

  if (loading) {
    return <Skeleton />;
  }

  if (!data) {
    return <p>Data not available.</p>;
  }

  return (
    <div className='App'>
      <h1>React App with Express SSR</h1>
      <div className='container'>
        {data &&
          data.results.map((item, index) => {
            return (
              <div key={index} className='card'>
                <h2>{item.name}</h2>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${
                    index + 2
                  }.jpg`}
                  alt={`${item.name}-img`}
                />
                <ul>
                  <li>Population: {item.population}</li>
                  <li>Climate: {item.climate}</li>
                  <li>Terrain: {item.terrain}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
