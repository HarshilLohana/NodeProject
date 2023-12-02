const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const permissionSchema = new Schema({
    name: { type: String, required: true },
    description : {type:String,required:true}
})

module.exports = mongoose.model('permission',permissionSchema)