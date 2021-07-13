const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            users:'/api/users',
            weight:'/api/weight'
        }

        //conectar a la base de datos
        this.connectDB()
        //middlewares
        this.middlewares()
        //rutas app
        this.routes()
    }

    async connectDB(){
        await dbConnection()
    }
    
    middlewares(){
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static("public"))
    }

    routes(){
        const r = this.paths
        this.app.use(r.users, require('../routes/usersRoutes'))
        this.app.use(r.weight, require('../routes/weightRoutes'))
    }

    listen(message = 'running weight tracker at: '){
        this.app.listen(this.port, ()=>{
            console.log(message, this.port)
        })
    }
}

module.exports= Server;