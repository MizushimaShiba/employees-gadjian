const { Router } = require('express')
const EmployeeController = require('../controllers/EmployeeController')

const routes = Router();

routes.get('/employees', EmployeeController.index)
routes.post('/employees', EmployeeController.create)
routes.get('/employees/:id', EmployeeController.search)
routes.put('/employees/:id', EmployeeController.update)
routes.delete('/employees/:id', EmployeeController.destroy)

module.exports = routes