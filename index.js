const express = require('express');
const axios = require('axios').default;


const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
