const express = require('express')
const permissionModel= require('../model/PermissionModel')


const givePermission = async(req,res) => {
    const name = req.body.name
    const permission = new permissionModel(req.body)
    const employee = permissionModel.findOne({"name":name})
    if(employee){
        const flag = await permission.save()
        if(flag){
            res.status(200).json({message:"Permission Granted",data:permission})
        }else{
            res.status(400).json({message:"Something went wrong",data:[]})
        }
    } else{
        res.status(400).json({message:"User not found",data:[]})
    }
}

const getPermission = async(req,res) => {
    const desc = req.params.desc
    const permissions = await permissionModel.find({"description":desc})
    if(permissions){
        res.status(200).json({message:"Permissions",data:permissions})
    }else{
        res.status(400).json({message:"No Data Found",data:[]})
    }
}
/*
const getWritePermission = async(req,res) => {
    const desc = req.params.desc
    const writePermissions = await permissionModel.find({"description":desc})
    if(writePermissions){
        res.status(200).json({message:"Write Permissions",data:writePermissions})
    }else{
        res.status(400).json({message:"No Data Found",data:[]})
    }
}

const getUpdatePermission = async(req,res) => {
    const desc = req.params.desc
    const updatePermissions = await permissionModel.find({"description":desc})
    if(updatePermissions){
        res.status(200).json({message:"Update Permissions",data:updatePermissions})
    }else{
        res.status(400).json({message:"No Data Found",data:[]})
    }
}

const getDeletePermission = async(req,res) => {
    const desc = req.params.desc
    const deletePermissions = await permissionModel.find({"description":desc})
    if(deletePermissions){
        res.status(200).json({message:"Delete Permissions",data:deletePermissions})
    }else{
        res.status(400).json({message:"No Data Found",data:[]})
    }
}
*/
module.exports = {
    givePermission,
    getPermission
}