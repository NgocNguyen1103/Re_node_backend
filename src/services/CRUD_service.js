const db = require('../config/db_config')

const getAllUsers = async () =>{
    let [results, fields] = await db.query('select * from Users')
    return results
}

module.exports = {
    getAllUsers
}