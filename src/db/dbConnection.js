 const mongoose = require("mongoose")

const dbconnect = ()=>{
    mongoose.connect("mongodb+srv://hiralkunjadiya9:pZYJLkx8f1txOuCy@netflix.e9o9kve.mongodb.net/validation")
    .then((data)=>{
        if (data) {
            console.log("Data Base Connect Successfull...!");
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = dbconnect