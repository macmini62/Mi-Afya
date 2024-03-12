const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '20dfc8eedfedc34f9bbdf4ddce0e09076ec6f8e332963994b4786e1eeb60a8af', 
  username: 'sandbox'
});



module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: '+254111304379', 
    message:'one two, one two api testing'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};