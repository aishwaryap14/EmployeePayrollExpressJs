const model = require('../model/employee');
const mongoose = require('mongoose');
//Schema
let employee = mongoose.Schema( {
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    profilePic: {
        type: String,
        required: [true, "Profile Pic cannot be empty"] 
    },
    gender: {
        type: String,
        required: [true, "Gender cannot be empty"]
    },
    department: {
        type: Array,
        required: [true, "Department cannot be empty"]
    },
    startDate: {
        type: String,
        required: [true, "Date cannot be empty"]
    },
    note: {
        type: String,
        required: [true, "Note cannot be empty"]
    },
    
},{ timeStamps: true})

// collection
exports.employeeModel = mongoose.model("employee",employee);