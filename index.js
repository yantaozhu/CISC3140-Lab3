const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;

app.use(express.json());

const Squirrel = require('./squirrel');

app.get('/squirrels',function(req,res,next){
    Squirrel.find({}).then(function(squirrels){
        res.send(squirrels);
    }).catch(next);
});

app.post('/squirrels',function(req,res,next){
    Squirrel.create(req.body).then(function(squirrel){
        res.send(squirrel);
    }).catch(next);
});

app.put('/squirrels/:id',function(req,res,next){
    Squirrel.findOneAndUpdate({_id: req.params.id},req.body).then(function(squirrel){
        Squirrel.findOne({_id: req.params.id}).then(function(squirrel){
            res.send(squirrel);
        });
    });
});

app.delete('/squirrels/:id',function(req,res,next){
    Squirrel.findOneAndDelete({_id: req.params.id}).then(function(squirrel){
        res.send(squirrel);
    });
});

app.listen(process.env.port || 3000, function(){
   console.log('Server starting');
});
