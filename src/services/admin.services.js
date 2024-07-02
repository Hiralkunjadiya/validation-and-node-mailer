const { Admin } = require("../model")

const create_admin= (data) => {
    return Admin.create(data)
}



module.exports = {
    create_admin
}