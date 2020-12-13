const { Router } = require('express')
const EmployeeController = require('../controllers/EmployeeController')

const routes = Router();

routes.post('/reverse', EmployeeController.reverse)
routes.post('/fibonacci', EmployeeController.fibonaccied)
routes.post('/combination', EmployeeController.combining)

module.exports = routes