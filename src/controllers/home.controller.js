const db = require('../config/db_config')


const getHomePage = (req, res) => {
    res.render('home_page.ejs')
}

const getAbc = (req, res) => {
    res.render("sample.ejs")
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

const registerUser = (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const city = req.body.city

    const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
    const values = [email, name, city]
    //console.log(values);

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        //console.log(values);
        res.send("Welcome")
    })

}

module.exports = {
    getHomePage,
    getAbc,
    getUsers,
    registerUser,
}