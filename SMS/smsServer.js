const express = require('express');
const sendSMS = require('./sendSMS');

const app = express();


module.exports = function smsServer() {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    // TODO: Incoming messages route
    app.post('/incoming-messages', (req, res) => {
  const data = req.body;
  console.log(`Received message: \n ${data}`);
  res.sendStatus(200);
});


    // TODO: Delivery reports route

     const port = process.env.PORT || 3001;

     app.listen(port, () => {
         console.log(`App running on port: ${port}`);
         });
         
     app.post('/delivery-reports', (req, res) => {
   const data = req.body;
   console.log(`Received report: \n ${data}`);
   res.sendStatus(200);
});

        // TODO: call sendSMS to send message after server starts
        sendSMS();

};