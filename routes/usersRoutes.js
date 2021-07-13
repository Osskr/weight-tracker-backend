const {Router} = require('express')

const {usersGet} = require('../controllers/userController')

const router = Router()

//rutas usuario
router.get('/', usersGet)

//obtiene la informacion de un usuario si existe
router.get('/:id', userGet)

//crear un usuario
router.post('/',userCreate)

//modifica la informacion de un usuario 
router.put('/:id', userUpdate)

//elimina logicamente a un usuario
router.delete('/:id', userDelete)

module.exports=router