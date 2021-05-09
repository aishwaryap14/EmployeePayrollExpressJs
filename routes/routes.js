const controller = require('../controllers/employeeController');

let express = require('express');
let router = express.Router();
//adding employee details
router.post("/add", controller.employeeController);
module.exports = router