const express= require("express");

const router = express.Router();
const Event = require("../models/eventmodel");


router.route("/create").post((req,res)=>{
    const title=req.body.title;
    const content =req.body.content;
    const newEvent = new Event({
        title,
        content
    });
    console.log("The data is updated ");
    
    newEvent.save();
})

router.route("/events").get((req,res)=>{
    Event.find()
        .then(foundEvents => res.json(foundEvents))
})




//config the route 

module.exports =router;