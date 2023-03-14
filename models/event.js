const mongoose = require('mongoose');

const schema = mongoose.Schema


const EventSchema = new schema({
    eventname: {
        type: String,
        required: true
    },
    eventdate: {
        type: Date,
        required: true
    },
    eventplace:{
        type: String,
        required:true
    },
    eventtime: {
        type: String,
        required: true
    },
    eventdesc: {
        type: String,
        required: false
    },
})



module.exports = mongoose.model('event', EventSchema);