const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

app.use(
  cors({
    origin: '*',
  })
);

app.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
  let endpoint = process.env.API_BASE_URL + req.params.endpoint;

  axios.defaults.headers.common['x-apikey'] = process.env.API_KY;

  axios
    .get(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.listen(5500, () => console.log(`Server started on port 5500`));
