const express = require('express')
const { number } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema ({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    age:{type:Number},
    password:{type:String,required:true},
    count:{type:Number},
    token:{type:String}
})

module.exports = mongoose.model("employee",employeeSchema)