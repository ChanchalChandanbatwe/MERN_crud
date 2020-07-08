const db = require("../models");

const Employee = db.employee;


//create ans save new record
exports.create = (req, res) => {
    if (!req.body.firstName) {
        res.status(400).send({message: "First name can not be empty."})
    }

    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    })

    employee
    .save(employee)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Some error occurred."})
    })
}


// Retrive find all employees from database
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;

    var condition = firstName ? {firstName: {$regex: new RegExp(firstName), $options: "i"}} : {};
    
    Employee.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Some error occurred"});
    })
}

// Find a single employee by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Employee.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Employee with id " + id });
        else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Employee with id=" + id });
        });
}


// Update employee by id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
    const id = req.params.id;

    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`
        });
        } else res.send({ message: "Employee was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Employee with id=" + id
        });
    });
}

//Delete employee by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      } else {
        res.send({
          message: "Employee was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
}

//Delete all employees from database
exports.deleteAll = (req, res) => {
  Employee.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Employees were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all employees."
      });
    });
}

