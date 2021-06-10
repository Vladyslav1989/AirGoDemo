const mongoose = require('mongoose');



const ClientSchema = new mongoose.Schema({

  firstName: {
    type: String,    
    required: true,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    required: true,  
    trim: true,
    uppercase: true,   
    
    },
    phoneNUmber: {
        type: Number,
        required: true,    
        unique: [true, "Duplicate Phone Numbers Not allowed"],
        trim: true,
        uppercase: true
  }, 
 
});

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;