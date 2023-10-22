const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request handling
app.get('/getendpoint', (req, res) => {
  res.send('GET request received');
});

// POST request handling
app.post('/postendpoint', (req, res) => {
  // Assuming you're expecting JSON data in the request body
  const data = req.body;
  console.log('Received data:', data);
  
  // Process the data and send a response
  res.send('POST request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});