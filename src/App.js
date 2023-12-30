import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://swapi.dev/api/planets');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className='App'>
      <h1>React App with Express SSR</h1>
      <div className='container'>
        {data &&
          data.results.map((item,index) => {
            return (
              <div key={item.id} className='card'>
                <h2>{item.name}</h2>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`} alt={`${item.name}-img`}/>
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
