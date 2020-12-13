const {
  employee
} = require('../models')
const Util = require('../utils/Util')

module.exports = class EmployeeController {
  static async index(req, res, next) {
    try {

      const findAllEmployee = await employee.findAll()

      return res.status(200).json(findAllEmployee)
    } catch (error) {
      next(error)
    }
  }

  static async search(req, res, next) {
    try {

      const findOneEmployee = await employee.findByPk(req.params.id)

      return res.status(200).json(findOneEmployee)
    } catch (error) {
      next(error)
    }
  }

  static async create(req, res, next) {
    try {

      const createEmployee = await employee.create(req.body)

      return res.status(201).json(createEmployee)
    } catch (error) {
      next(error)
    }
  }

  static async update(req, res, next) {
    try {

      const findEmployee = await employee.findByPk(req.params.id)
      if (!findEmployee) return res.status(404).send('DATA NOT FOUND! PLEASE TRY ANOTHER ID!')

      const updateEmployee = await findEmployee.update(req.body)
      return res.status(200).json(updateEmployee)
    } catch (error) {
      next(error)
    }
  }

  static async destroy(req, res, next) {
    try {

      const findEmployee = await employee.findByPk(req.params.id)
      if (!findEmployee) return res.status(404).send('DATA NOT FOUND! PLEASE TRY ANOTHER ID!')

      await findEmployee.destroy()
      return res.status(204).send('')
    } catch (error) {
      next(error)
    }
  }

  static async reverse(req, res, next) {
    try {
      const reversed = Util.reverse(req.body.character)

      return res.status(200).json({result: reversed})
    } catch (error) {
      next(error)
    }
  }

  static async fibonaccied(req, res, next) {
    try {
      const result = Util.fibonacci(req.body.n)

      return res.status(200).json({result})
    } catch (error) {
      next(error)
    }
  }

  static async combining(req, res, next) {
    try {
      const combined = Util.combination(req.body.n, req.body.r)

      return res.status(200).json({result: combined})
    } catch (error) {
      next(error)
    }
  }
}