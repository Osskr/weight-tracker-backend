const {response} = require('express')

const usersGet = (req,res=response)=>{
    res.json({
        msg:'hola soy un usuario'
    })
}

const userGet = (req, res) =>{
    res.json({
        msg:'User get'
    })
}
const userCreate = (req, res) =>{
    res.json({
        msg:'User create '
    })
}
const userUpdate = (req, res) =>{
    res.json({
        msg:'User update'
    })
}
const userDelete = (req, res) =>{
    res.json({
        msg:'User delete '
    })
}
module.exports={
    usersGet,
    userGet,
    userCreate,
    userUpdate,
    userDelete,
}