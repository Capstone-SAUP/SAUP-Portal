const express = require('express')
const router = express.Router()
const outreachController = require('../controllers/outreachController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(outreachController.getAllOutreach)
    .post(outreachController.createNewOutreach)
    .patch(outreachController.updateOutreach)
    .delete(outreachController.deleteOutreach)

module.exports = router