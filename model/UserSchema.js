const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:Number,
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'department'
    },
    userRole : [
        {
            type:Schema.Types.ObjectId,
            ref:"role"
        }
    ]
})

module.exports = mongoose.model('user',userSchema)