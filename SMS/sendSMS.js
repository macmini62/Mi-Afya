// const AfricasTalking = require('africastalking');

// // TODO: Initialize Africa's Talking
// const africastalking = AfricasTalking({
//   apiKey: '9e7b5af6ffc3c5fc2356ae3dfa3738e10b51f446db44b82a04e31a8e5785821b', 
//   username: 'sandbox'
// });



// module.exports = async function sendSMS() {
    
//     // TODO: Send message
//     try {
//   const result=await africastalking.SMS.send({
//     to: '+254111304379', 
//     message:'one two, one two api testing'
//   });
//   console.log(result);
// } catch(ex) {
//   console.error(ex);
// } 

// };
// Set your app credentials

//ca980c7cc03327db9cddb10ef4806e0cc555cb5e2765dfe29ff94f146b987b34


//4
const credentials = {
    apiKey: 'ca980c7cc03327db9cddb10ef4806e0cc555cb5e2765dfe29ff94f146b987b34',
    username: 'devapp',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

const sendMessage = (phoneNumber, msg) => {
    const options = {
        to: phoneNumber,
        message: msg
    }
     console.log("Message sent");
    sms.send(options)
        .then(console.log)
        .catch(console.log);
};

module.exports = sendMessage;

