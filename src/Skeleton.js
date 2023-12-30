import React from 'react';

const Skeleton = () => {
  return (
    <div className='App'>
      <h1>React App with Express SSR</h1>
      <div className='loading container-skeleton'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div className='card loading' key={index}>
            <h2>Loading...</h2>
            <img src='' alt='Loading Image' />
            <ul>
              <li>Loading...</li>
              <li>Loading...</li>
              <li>Loading...</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
