const db = require('../config/db_config')


const getHomePage = (req,res) =>{
    res.render('sample.ejs')
}

const getAbc = (req, res) => {
    res.send("ABC")
}

const getUsers = (req, res) => {

    let users = []
    db.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results
            console.log(">>>>>>>>>>Results: ", results);
            // console.log(">>>>>>>>>>Fields: ", fields);
            // 
            console.log(users);
            res.send(JSON.stringify(users))
        }
    )
    
}

module.exports = {
    getHomePage,
    getAbc,
    getUsers
}