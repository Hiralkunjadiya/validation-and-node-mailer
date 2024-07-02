const express = require("express");
const { admin_Controller } = require("../../controller");
const { admin_Validation } = require("../../validation");

const router = express.Router();

router.post(
    "/create-admin",
    //validation
    admin_Validation.create_admin_v,
    //controller
    admin_Controller.create_admin
);

module.exports = router;