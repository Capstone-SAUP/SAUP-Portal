const express = require('express')
const router = express.Router()
const anexBController = require('../controllers/anexBController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(anexBController.getAllAnexB)
    .post(anexBController.createNewAnexB)
    .patch(anexBController.updateAnexB)
    .delete(anexBController.deleteAnexB)

module.exports = router
//