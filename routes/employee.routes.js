const express = require('express')
const router = express.Router()
const controller = require('../controllers/employee.controller')

router.get('/employee/getAll',controller.getAll)
router.get('/employee/getById/:id',controller.getById)
router.put('/employee/updateById/:id',controller.updateById)
router.delete('/employee/deleteById/:id',controller.deleteById)
router.delete('/employee/deleteAll',controller.deleteAll)
router.post('/employee/getByEmail',controller.getByEmail)

// Login
//router.post('/employee/login',controller.login)
router.post('/employee/addCustomer', controller.create)

module.exports = router
