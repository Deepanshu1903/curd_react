const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

})

router.get("/signup",async (req,res)=>{
    try{
        const studentsData= await signUpTemplateCopy.find();
        res.send(studentsData);
    }
    catch(e){
     res.send(e);
    }
})

module.exports = router
