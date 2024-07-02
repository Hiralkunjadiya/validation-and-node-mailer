const { Series } = require("../model")


const create_series = (data) => {
    return Series.create(data)
}
const find_by_name = (name) => {
    return Series.findOne({series_name:name})
}


module.exports = {
    create_series,
    find_by_name
}