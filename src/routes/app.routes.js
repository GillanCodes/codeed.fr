"use strict";

let router = require('express').Router();
let appController = require("../controllers/app.controller.js");

router.get('/', appController.index);

module.exports = router;