import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import axios from 'axios';

const app = express();
const PORT = 8000;

app.use('^/$', async (req, res, next) => {
  try {
    const response = await axios.get('http://swapi.dev/api/planets');
    const apiData = response.data;

    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Something went wrong...');
      }

      const appWithInitialData = (
        <App initialData={apiData} />
      );

      const renderedApp = ReactDOMServer.renderToString(appWithInitialData);

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      );
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return res.status(500).send('Something went wrong...');
  }
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT} 🚀🚀🚀`);
});
