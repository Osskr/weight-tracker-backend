const {response} = require('express')

const usersGet = (req,res=response)=>{
    res.json({
        msg:'hola soy un usuario'
    })
}


module.exports={
    usersGet
}