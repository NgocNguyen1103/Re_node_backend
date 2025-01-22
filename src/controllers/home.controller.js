const getHomePage = (req,res) =>{
    res.render('sample.ejs')
}

const getAbc = (req, res) => {
    res.send("ABC")
}

module.exports = {
    getHomePage,
    getAbc
}