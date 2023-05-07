const mongoose = require('mongoose');

const schema = mongoose.Schema


const EventSchema = new schema({
    eventname: {
        type: String,
    },
    eventdate: {
        type: Date,

    },
    eventplace:{
        type: String,
  
    },
    eventtime: {
        type: String,
    },
    eventdesc: {
        type: String,
 
    },
})



module.exports = mongoose.model('event', EventSchema);