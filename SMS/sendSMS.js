

//ca980c7cc03327db9cddb10ef4806e0cc555cb5e2765dfe29ff94f146b987b34
//96f6ca862e98df83f9df0c8e92dfc15ac27ffe0f79fced57de56b43c01e98c1c

const credentials = {
    apiKey: '96f6ca862e98df83f9df0c8e92dfc15ac27ffe0f79fced57de56b43c01e98c1c',
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

