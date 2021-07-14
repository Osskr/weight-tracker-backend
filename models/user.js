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
        type: String,
        default:'url-pic'
    },

    height:{
        type:Number,
        default:175
    },

    age:{
        type:Number,
        default:20
    },
    
    activity:{
        type:String,
        default:'NORMAL'
    },

    weight_goal:{
        type: Number,
        default:0
    },

    actual_weight:{
        type: Number,
        default:0
    },

    rol:{
        type:String,
        default:'USER_ROLE'
    },

    status:{
        type:Boolean,
        default:true
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