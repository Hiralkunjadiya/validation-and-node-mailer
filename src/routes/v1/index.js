const express = require("express")

const seriesRoute = require("./series.routes")

const router = express.Router()

router.use("/series",seriesRoute)

module.exports = router