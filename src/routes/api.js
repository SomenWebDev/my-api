const express = require("express");
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

const router = express.Router();

router.get("/hello-get", HelloController.HelloGet);
router.post("/hello-post", HelloController.HelloPost);

// mongoose

router.post("/InsertStudent",StudentsController.InsertStudent);

module.exports = router;
