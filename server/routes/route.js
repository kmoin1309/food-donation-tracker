const express = require("express");
const router = express.Router();

const formController = require("../controllers/form");

router.post('./form', formController.submitFrom);

module.exports = router;