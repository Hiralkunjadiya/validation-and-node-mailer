const express = require("express");
const { series_Controller } = require("../../controller");

const router = express.Router();

router.post(
    "/create-series",
    //controller
    series_Controller.create_series
);

module.exports = router;
