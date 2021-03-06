const employeeService = require('../services/employeeService');

exports.employeeController = (request, response) => {
    request.checkBody("name", "Name cannot be empty").isAlpha().len({min:3});
    request.checkBody("profilePic", "Profile pic cannot be empty").notEmpty();
    request.checkBody("gender", "Gender cannot be empty").notEmpty();
    request.checkBody("department", "Department cannot be empty").notEmpty();
    request.checkBody("startDate", "Date cannot be empty").notEmpty();
    request.checkBody("note", "Note cannot be empty").notEmpty();

    //getting error while validation
    const error = request.validationErrors();
    //if validation gets error send response 
    if(error)
        response.status(422).send(error);
    else {
        employeeService.employeeRegistration(request,(err,data) => {
            if(err) {
                response.status(500).send(err);
            } else{
                // response.status(200).send("Successfully added", data);
                response.send(200, data);
            }
        })
    }

}