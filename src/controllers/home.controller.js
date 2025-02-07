const db = require('../config/db_config')
const { getAllUsers } = require("../services/CRUD_service")

const getHomePage = async (req, res) => {

    // let [results, field] = await db.query('select * from Users') 

    let users = await getAllUsers() //getAllUsers is async function, so need await to get data

    res.render('home_page.ejs', { list_users: users })
    //previous error: send Json.stringify => cannot use forEach
    
}

const getAbc = (req, res) => {
    res.render("sample.ejs")
}

const getUsers = async (req, res) => {

    let users = []

    //using callback
    // db.query(
    //     'SELECT * FROM Users',
    //     function (err, results, fields) {
    //         users = results
    //         console.log(">>>>>>>>>>Results: ", results);
    //         // console.log(">>>>>>>>>>Fields: ", fields);
    //         // 
    //         console.log(users);
    //         res.send(JSON.stringify(users))
    //     }
    // )

    const [results, fields] = await db.query('select * from Users')
    users = results
    console.log(results);
    res.send(JSON.stringify(users))


}

const getRegisterForm = (req, res) => {
    res.render("create_user.ejs")
}

const registerUser = async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const city = req.body.city

    const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
    const values = [email, name, city]
    //console.log(values);

    const [results, field] = await db.query(query, values)
    console.log(results);

    res.send("welcome" + " " + name)

    // db.query(query, values, (err, results) => {
    //     if (err) {
    //         console.error('Error inserting data:', err);
    //         res.status(500).send('Internal Server Error');
    //         return;
    //     }
    //     //console.log(values);
    //     console.log(values);

    //     res.send("Welcome")
    // })

}

module.exports = {
    getHomePage,
    getAbc,
    getUsers,
    registerUser,
    getRegisterForm,
}