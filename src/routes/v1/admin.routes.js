const express = require("express");
const { admin_Controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-admin",
    //controller
    admin_Controller.create_admin
);

module.exports = router;