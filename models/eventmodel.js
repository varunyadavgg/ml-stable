const mongoose=require("mongoose")

const eventSchema={
    title:String,
    content: String
}

const Event = mongoose.model("Event",eventSchema);

module.exports=Event;