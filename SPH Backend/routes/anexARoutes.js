const express = require('express')
const router = express.Router()
const anexAController = require('../controllers/anexAController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(anexAController.getAllAnexA)
    .post(anexAController.createNewAnexA)
    .patch(anexAController.updateAnexA)
    .delete(anexAController.deleteAnexA)

module.exports = router