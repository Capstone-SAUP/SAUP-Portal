const express = require('express')
const router = express.Router()
const anexBController = require('../controllers/anexBController')
const outreachController = require('../controllers/outreachController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(anexBController.getAllAnexB)
    .post(outreachController.createNewOutreach)
    .patch(outreachController.updateOutreach)
    .delete(outreachController.deleteOutreach)

module.exports = router