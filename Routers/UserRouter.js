const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema');


  router.post('/AllUsers',async (req,res)=> {
    try{
      const data= await User.create(req.body)
      res.send('Created Users')
    }
    catch(err){
      res.status(500).json({error:err.message})
    }
  })

  router.get('/Users',(req,res)=>{
     User.find({},res.json(data))
  })

  router.post('/NewUser', (req,res) => {
     const newUser = new User(req.body)
     newUser
     .save()
     .then(() => res.send('Record saved'))
  })

  router.put('/:id',(req,res)=>{
     User.findOneAndUpdate({_id: req.params.id},{$set:{age:18}},{new:true},res.json(data))
  })

  router.delete('/:UserID',(req,res)=>{
     User.findByIdAndRemove(req.params.UserID,res.send('User is deleted'))
  })



module.exports= router