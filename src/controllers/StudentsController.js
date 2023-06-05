const StudentsModel = require("../models/StudentsModel");

exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  StudentsModel.create(reqBody, (err) => {
    if (err) {
      res.status(400).json({
        status: "failed",
        data: err,
      });
    } else {
      res.status(201).json({
        status: "success",
        data: data,
      });
    }
  });
};
