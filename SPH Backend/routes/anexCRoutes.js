const express = require('express')
const router = express.Router()
const anexCController = require('../controllers/anexCController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(anexCController.getAllAnexC)
    .post(anexCController.createNewAnexC)
    .patch(anexCController.updateAnexC)
    .delete(anexCController.deleteAnexC)

module.exports = router
//