const {Router} = require('express') 

const {weightGet} = require('../controllers/weightController')

const router = Router()

//weigth routes
//Devuelve una lista de pesos registrados del usuario, puede ser paginado
router.get('/', weightGet)

module.exports = router;