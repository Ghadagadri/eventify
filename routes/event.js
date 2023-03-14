const express = require('express');
const event = require('../models/event');
const router = express.Router(); 
const Event=require('../models/event');



// add event //
router.post('/add',  async (req, res) => {
    
    try {
        const newEvent = new Event (req.body)
       const result= await newEvent.save()
       res.send({event:result, msg:"event added"})

    } catch (error) {
        console.log(error)
        
    }

});
// Get all events //
router.get('/',  async (req, res) => {    
    try {
       const result= await Event.find()
       res.send ({event:result, msg:"event getted"})

    } catch (error) {
        console.log(error)
        
    }

});  



// Get events by id //
router.get('/:id',  async (req, res) => {    
    try {
       const result= await Event.findById({_id:req.params.id})
       res.send ({event:result, msg:"event getted"})

    } catch (error) {
        console.log(error)
        
    }

}); 





// Update event by id //

router.put('/:id',async (req, res) => {
    try {
       const result = await Event.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});

        res.send({event: result,msg:"event updated successfully"+ ''+req.params.id });


    } catch (error) {
        console.log(error)
    }

})

// Delete event by id//

router.delete('/:id',async (req, res) => {
    try {
       const result = await Event.findByIdAndDelete({_id:req.params.id},{$set:{...req.body}});

        res.send({event: result,msg:"event deleted successfully"+ ''+req.params.id });


    } catch (error) {
        console.log(error)
    }

})








module.exports = router;