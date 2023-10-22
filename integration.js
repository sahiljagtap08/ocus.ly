const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./ocusly-firebase-adminsdk-8ncw4-101f3ee3b9.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
  const db = admin.firestore();
  const app = express();
  app.use(express.json());
  
  // GET request handler
  app.get('/', (req, res) => {
    res.send('This is a GET request. Use a POST request to access the webhook endpoint.');
  });
  
  // POST request handler
  app.post('/webhook-endpoint', async (req, res) => {
    try {
      const data = req.body; // Assuming the data is sent in the JSON format
      // Create a custom document ID or use any unique identifier from your data
      const docId = 'customDocumentId'; // Replace this with your own logic
      // Store the data in Firestore with the custom document ID
      const docRef = db.collection('webhookData').doc(docId);
      await docRef.set(data);
  
      console.log('Data successfully stored in Firestore:', data);
  
      res.sendStatus(200);
    } catch (error) {
      console.error('Error storing data in Firestore:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  
