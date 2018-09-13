const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Follower = require('../models/follower')
const User = require('../models/user')

router.get('/followers', (req, res, next) => {
    if(req.user){

        const  query = {$or:[{actionUser:req.user._id },{user2:req.user._id}]}

        Follower.find(query).populate({
            path:'user2',
            select:'username first_name last_name avatar'
        }).populate({
            path:'user1',
            select:'username first_name last_name avatar'
        }).then((list, err) => {

            if (err) {
                res.json(err);
                return;
            }
            // list.for
            let followback = [];

            const response = list.filter(f=>{
                if(f.status == "pending"){
                    if(String(f.user2._id) === String(req.user._id)){
                        followback.push(f)
                        return f;
                    }
                    return f;
                }else{
                    if(String(f.user2._id) === String(req.user._id)){
                        return false;
                    }
                    return f;
                }
            })

            //The Magic filter -- 
            const filtered = response.map(u=>{
                if(u.status == "pending"){
                    const check = followback.find(i=> String(i.user2._id) === String(req.user._id));
                    if(check){
                        return {...u.user1, status:"followback"}
                    }else{
                        return {...u.user2, status:"pending"}
                    }
                }
                return {...u.user2, status:u.status}
            }).map(f=>{
                return {...f._doc, status: f.status}
            })

            res.json(filtered);

        })
        .catch(error => next(error))

    }else{
        res.status(400).json({ message: 'Unauthorized' });
    }
});

router.get('/follower/:name', (req, res, next) => {

    const  query = { _id: { $ne: req.user._id}  , $or:[{first_name:{$regex: req.params.name, $options: 'i'}},{last_name:{$regex: req.params.name, $options: 'i'}},{username:{$regex: req.params.name, $options: 'i'}}]}

    User.find(query , function (err, data) {
        if(err) {
            res.status(400).json({ message: 'Somthing went wrong!' });
            return;
        }

        const response = data.map(user=>{
            return {first_name:user.first_name, last_name:user.last_name, avatar: user.avatar, username: user.username}
        });

        res.status(200).json(response);
        return;
    });
});

router.delete('/follower/:username', (req, res, next) => {
    
    if(req.user){

        User.findOne({username:req.params.username}, (err, user)=>{

            if(err) {
                res.status(400).json({ message: 'Somthing went wrong!' });
                return;
            }
            if(!user){
                res.status(400).json({ message: 'Invalid User.' });
            }else{

                //Delete other user follow entry

                Follower.deleteOne({actionUser: req.user._id, user2:user._id}, (err, follower)=>{

                    if(err) {
                        res.status(400).json({ message: 'Somthing went wrong!' });
                        return;
                    }
                    if(!follower){
                        res.status(400).json({ message: 'You are not following this user.' });
                    }

                    //Delete other user follow entry
                    Follower.deleteOne({actionUser: user._id, user2:req.user._id}, (err, follower)=>{
                        if(err) {
                            res.status(400).json({ message: 'Somthing went wrong!' });
                            return;
                        }
                        if(!follower){
                            res.status(400).json({ message: 'You are not following this user.' });
                        }else{
                            res.status(200).json({ message: 'Unfollowed' });
                        }
                
                    })  
            
                })

            }

        })

    }else{
        res.status(400).json({ message: 'Unauthorized' });
    }
  
});

router.post('/follower', (req, res, next) => {
    if(req.user){

        User.findOne({username:req.body.username}, (err, user)=>{

            if(err) {
                res.status(400).json({ message: 'Somthing went wrong!' });
                return;
            }
            if(!user){
                res.status(400).json({ message: 'User does not exist.' });
            }else{

                const AddFollower = new Follower({
                    user1: req.user._id,
                    user2: user._id,
                    actionUser: req.user._id
                });

                AddFollower.save((err)=>{
                    if(err) {
                        res.status(400).json({ message: 'Somthing went wrong!' });
                        return;
                    }
                }).then(()=>{
                    res.status(200).json({ message: 'Following' });
                })
    
            }
    
        })

    }else{
        res.status(400).json({ message: 'Unauthorized' });
    }
  
});

router.put('/follower', (req, res, next) => {
    if(req.user){
        console.log()
        User.findOne({username:req.body.username}, (err, user)=>{

            if(err) {
                res.status(400).json({ message: 'Somthing went wrong!' });
                return;
            }

            if(!user){
                res.status(400).json({ message: 'User does not exist.' });
            }else{

                Follower.updateOne({user2:req.user._id, actionUser: user._id},{status:"following"},(err,data)=>{
                    if(err) {
                        res.status(400).json({ message: 'Somthing went wrong!' });
                        return;
                    }
                    console.log(data)

                    const ConfirmFollow = new Follower({
                        user1: req.user._id,
                        user2: user._id,
                        actionUser: req.user._id,
                        status: "following"
                    });

                   ConfirmFollow.save((err)=>{

                    if(err) {
                        res.status(400).json({ message: 'Somthing went wrong!' });
                        return;
                    }

                   }).then(data=>{

                            res.status(200).json({ message: 'Following' });


                   })

                })
            }
    
        })

    }else{
        res.status(400).json({ message: 'Unauthorized' });
    }
  
});


module.exports = router;