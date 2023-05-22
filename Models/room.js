const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
   name:{
    type: String
   },
   room:{
    type:Number
   },
   energy:{
    type:Boolean
   }
})

module.exports = mongoose.model("Room",roomSchema);