const db = require('../config/db_config')

const getAllUsers = async () => {
    let [results, fields] = await db.query('select * from Users')
    return results
}

const getUserById = async (user_id) => {
    let [results, fields] = await db.query('select * from Users where id = (?)', [user_id])
    //return and array 
    return results.length > 0 ? results[0] : {};

}


const updateUserById = async (email, name, city, user_id) => {
    let [results, fields] = await db.query('UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, user_id])
    return results
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}