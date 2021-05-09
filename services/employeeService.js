const model = require("../model/employee");

exports.employeeRegistration = (request, callback) => {
    try{
        model.employeeModel.findOne({"name": request.body.name }, (err, employee) => {
            if(employee)
                callback("Name Already exist");
            else {
                let employeeDetails;
                employeeDetails = new model.employeeModel({
                    "name": request.body.name,
                    "profilePic": request.body.profilePic,
                    "gender": request.body.gender,
                    "department": request.body.department,
                    "startDate": request.body.startDate,
                    "note": request.body.note
                })
                employeeDetails.save()
                    .then(employee => {
                        callback(null, employee);
                    })
                    .catch(err => {
                        callback(err);
                    })
            }
        } )
    }catch (e) {

    }
}