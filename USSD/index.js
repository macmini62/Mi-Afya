const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/api/test', (req,res)=>{
    res.send("Testing the requests")
})

let name = "";
let age = "";
let names = [];

// assume this is a databse that a medical facility can access.
const symptoms = ["Headache","Chestpain","Dehydration","Diarrhoea"];
const periods = ["1 Day", "2 Days", "3-5 Days", "1 Week"];
const locations = ["Chuka", "Embu", "Meru"];


app.post('/ussd', (req,res)=>{
    const {sessionId, serviceCode, phoneNumber,text} = req.body;
    let response = "";
    if(text === ""){
        response = `CON Welcome To MiAfya
        Choose A Health Issue:

        1:Diabetes
        2.HIV/AIDS
        3.State your symptoms`;
    }
    else if(text === "1"){
        response = "CON Choose a location: \n";
        for(let i = 0; i < locations.length; i++){
            response += `${i+1}. ${locations[i]}\n`;
        }
    }
    else if(text === "2"){
        response = "CON Choose a location: \n";
        for(let i = 0; i < locations.length; i++){
            response += `${i+1}. ${locations[i]}\n`;
        }
    }else if(text === "3"){
        response = `CON Choose main Symptoms:
        1.Fever & Vomiting
        2.Coughing & Headache
        ` 
    }else if(text === "3*1" || text === "3*2"){
        response = "CON Choose other Symptoms: \n";
        for(let i = 0; i < symptoms.length; i++){
            response += `${i+1}. ${symptoms[i]}\n`;
        }
    }else if(
        text === "3*1*1" ||
        text === "3*1*2" || 
        text === "3*1*3" ||
        text === "3*1*4" ||
        text === "3*2*1" ||
        text === "3*2*2" || 
        text === "3*2*3" || 
        text === "3*2*4" 
    ){
        response = "CON Choose duration of sickness: \n"
        for(let i = 0; i < periods.length; i++){
            response += `${i+1}. ${periods[i]}\n`;
        }
    }

    // handle symptoms, fever
    else if(
        text === "3*1*1*1"||
        text === "3*1*2*1"||
        text === "3*1*3*1"||
        text === "3*1*4*1"||
        text === "3*1*1*2"||
        text === "3*1*2*2"||
        text === "3*1*3*2"||
        text === "3*1*4*2"||
        text === "3*1*1*3"||
        text === "3*1*2*3"||
        text === "3*1*3*3"||
        text === "3*1*4*3"||
        text === "3*1*1*4"||
        text === "3*1*2*4"||
        text === "3*1*3*4"||
        text === "3*1*4*4"
    ){
        response = "CON Choose the nearest location to access a medical facility: \n"
        for(let i = 0; i < locations.length; i++){
            response += `${i+1}. ${locations[i]}\n`;
        }
    }

//  handles symptoms, coughing
    else if(
        text === "3*2*1*1"||
        text === "3*2*2*1"||
        text === "3*2*3*1"||
        text === "3*2*4*1"||
        text === "3*2*1*2"||
        text === "3*2*2*2"||
        text === "3*2*3*2"||
        text === "3*2*4*2"||
        text === "3*2*1*3"||
        text === "3*2*2*3"||
        text === "3*2*3*3"||
        text === "3*2*4*3"||
        text === "3*2*1*4"||
        text === "3*2*2*4"||
        text === "3*2*3*4"||
        text === "3*2*4*4"
    ){
        response = "CON Choose the nearest location to access a medical facility: \n"
        for(let i = 0; i < locations.length; i++){
            response += `${i+1}. ${locations[i]}\n`;
        }
    }
    else{
        response = `END You'll receive a message with the nearest medical facility to visit in your area`
    }

    res.set('Content-Type:text/plain');
    res.send(response);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res)=>{
    console.log(`Ussd server listening on port ${PORT}`);
})