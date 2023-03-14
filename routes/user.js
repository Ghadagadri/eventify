const express = require('express');

const router = express.Router(); 
const bcrypt = require('bcrypt');
const User=require('../models/User');
const jwt = require('jsonwebtoken');
const {loginRules,regiterRules,validation}=require('../middleware/validator');
const isAuth=require('../middleware/passport');





// router.get('/', (req, res) => {
//     res.send("hello world");


// });

//register route
router.post('/register', regiterRules(), validation, async (req, res) => {
    const { name, lastName, email, password, phone } = req.body;
    try {
        const newUser = new User({ name, lastName, email, password,phone});
        // chek if the email already exists
        const searchedUser = await User.findOne({ email });

        if (searchedUser) {
        return res.status(400).send({ message: 'Email already exists' });
        }

        //hash password
        const salt = 10
        const genSalt = await bcrypt.genSaltSync(salt);
        const hashedPassword = await bcrypt.hashSync(password, genSalt);
        console.log(hashedPassword)
        newUser.password = hashedPassword;

        //save the user
        const newUserToken = await newUser.save();
               // generate token
               const payload = {
                _id: newUserToken._id,
                name: newUserToken.name,
                
            }
            const token = await jwt.sign(payload, process.env.SecretOrkey,{expiresIn:3600});
        res.status(200).send({newUserToken, msg:"user is saved successfully", token:`Bearer ${token}`});
          
    } catch (error) {
        res.status(500).send("can not  save the user");

        
    }

});


//login route

router.post('/login', loginRules(), validation, async (req, res) => {
    const { email, password } = req.body;

    try {
        // find if the user exists
        const searchedUser=await User.findOne({ email });
        
        // if the email does not exists
        if(!searchedUser){
            return res.status(400).send({ message: 'bad Credential' });
        }
        // password are equal
        const match = await bcrypt.compare(password, searchedUser.password);
        
        if(!match){
            return res.status(400).send({ message: 'bad Credential' });
        }
        // create a token
        const payload = {
            _id: searchedUser._id,
            name: searchedUser.name,


        };
        const token = await jwt.sign(payload, process.env.SecretOrkey,{expiresIn:3600});
        

        // send the user
        res.status(200).send({user:searchedUser, msg:"user is logged in successfully", token:`Bearer ${token}`});

        




    } catch (error) {
        res.status(500).send({msg:"can not  get the user"});

    }
});



// router.get('/current',isAuth, async (req, res) => {
//     res.status(200).send({user:req.user});
    


// })
router.get('/current', isAuth(), async (req, res) => {
    res.status(200).send({user:req.user});
    
})

// delet user//

router.delete('/:id',async (req, res) => {
    try {
       const result = await User.findByIdAndDelete({_id:req.params.id});

        res.send({User: result,msg:"user deleted successfully"});


    } catch (error) {
        console.log(error)
    }

})
// UPDATE //
router.put('/:id',async (req, res) => {
    try {
       const result = await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});

        res.send({User: result,msg:"user updated successfully"+ ''+req.params.id });


    } catch (error) {
        console.log(error)
    }

})


// get all user
router.get('/all',  async (req, res) => {    
    try {
       const result= await User.find()
       res.send ({user:result, msg:"users getted"})

    } catch (error) {
        console.log(error)
        
    }

});  
// get by id //
router.get('/:id',  async (req, res) => {    
    try {
       const result= await User.findById({_id:req.params.id})
       res.send ({user:result, msg:"user getted"})

    } catch (error) {
        console.log(error)
        
    }

});  





module.exports = router;