const {Router} = require('express')
const {check} = require('express-validator')
const {usersGet,
    userGet,
    userCreate,
    userUpdate,
    userDelete} = require('../controllers/userController')
const { validateFields } = require('../middlewares/validateFields')

const router = Router()

//rutas usuario
router.get('/', usersGet)

//obtiene la informacion de un usuario si existe
router.get('/:id', userGet)

//crear un usuario
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password','password must have at least 6 characters ').isLength({min:6}),
    validateFields
],userCreate)

//modifica la informacion de un usuario 
router.put('/:id', userUpdate)

//elimina logicamente a un usuario
router.delete('/:id', userDelete)

module.exports=router