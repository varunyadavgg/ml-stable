const express=require("express");
const app = express();
const cors = require('cors');
const mongoose =require("mongoose")

app.use(cors());
app.use(express.json());

//connect to mongoose 

mongoose.connect("mongodb+srv://varunsalazaar:Y4VvqYZsYJ2RxYzk@fsd.hh7hzcr.mongodb.net/eventsDB?retryWrites=true&w=majority")

// connect to the route required  

app.use("/",require("./routes/eventRoute"));

app.listen(3001, function() {
    console.log("The Express server is running on port 3001");

})