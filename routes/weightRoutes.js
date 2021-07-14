const {Router} = require('express') 

const {weightGet,
       newWeight,
       updateWeight,
       deleteWeight} = require('../controllers/weightController')

const router = Router()

//weigth routes
//Devuelve una lista de pesos registrados del usuario, puede ser paginado
router.get('/', weightGet)


router.post('/', newWeight)

router.put('/:id', updateWeight)

router.delete('/:id', deleteWeight)

module.exports = router;