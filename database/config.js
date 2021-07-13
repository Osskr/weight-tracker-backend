const mongoose = require('mongoose')

const dbConnection = async()=>{

    try{
        //try mongo db connection 
        await mongoose.connect(process.env.MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify:false
        })

        console.log('weight tracker database up and running')
    }catch (err) {
        console.log(error)
        throw new Error('error trying to connect database')
    }
}

module.exports = {
    dbConnection
}