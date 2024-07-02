const express = require("express")

const seriesRoute = require("./series.routes")
const adminRoute = require("./admin.routes")

const router = express.Router()

router.use("/series",seriesRoute)
router.use("/admin",adminRoute)

module.exports = router