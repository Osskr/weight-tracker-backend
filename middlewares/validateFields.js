 const {validationResult} = require('express-validator')

 const validateFields = (req,res,next) => {
    // al ser un middleware, necesitamos la funcion next(), si todo sale
    //bien en la validacion llama a next() y continua con otros middlewares
    //si los hay

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next();
 }

 module.exports={
     validateFields
 }