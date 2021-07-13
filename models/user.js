// //Modelo de usuario
//   {
//     name:'username',
//     email:'email@provider.com',
//     password:'***********',
//     profile_pic:"url-img",
//     heigth:'145',
//     age:'asdasd',
//     activity:'NONE, INTENSE,MODERATE, NORMAL',
//     weigth_goal:'1231.',
//     actual_weigth:'123123',
//     rol:'USER ROLE',
//     status:true
//     google:false,
//  }

const {Schema, model} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = Schema({

    name:{
        type: String,
        required:[true, 'name is required']
    },

    email:{
        type: String,
        unique:true,
        required:[true,'email is required']
    },

    password:{
        type: String,
        required:[true, 'password is required']
    },

    profile_pic:{
        type: String
    },

    height:{
        type:Number
    },

    age:{
        type:Number
    },
    
    activity:{
        type:String
    },

    weight_goal:{
        type: Number
    },

    actual_weight:{
        type: Number
    },

    rol:{
        type:String
    },

    status:{
        type:Boolean
    },

    google:{
        type:Boolean,
        default:false
    }

})

// UserSchema.methods.toJSON = function(){
    
// }

UserSchema.plugin(uniqueValidator, {message: '{PATH} must be unique'})
module.exports = model('User', UserSchema);