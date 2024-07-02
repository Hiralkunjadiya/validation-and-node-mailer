const mongoose = require("mongoose");

const series_schema = mongoose.Schema(
    {
        series_name: {
            type: String,
            trim: true
        },
        series_rating: {
            type: Number, 
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const series = mongoose.model("Series",series_schema)

module.exports = series