const {response} = require('express')
const bcryptjs = require('bcryptjs')

//User model
const User = require('../models/user')


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

const userCreate = async(req, res) =>{

    const {name,email,password} = req.body;

    const user = new User({name,email,password})

    //Encriptar la contraseña 
    //salt indica el nivel de encriptacion ver docs en bcryptjs
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password,salt)

    //insertamos el usuario en la base de datos
    await user.save()

    res.json({
        user
    })
}


const userUpdate = (req, res) =>{
    res.json({
        
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