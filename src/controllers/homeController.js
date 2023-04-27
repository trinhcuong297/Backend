import pool from "../configs/connectDB"

const getHomePage = async (req, res) => {
    let fetchData = await pool.execute('SELECT * FROM users')
    let DataUsers = fetchData[0]
    return res.render('index.ejs', { DataUsers })
}

const getUser = async (req, res) => {
    let user = await pool.execute('SELECT * FROM users WHERE id = ?', [req.params.id])
    return res.send(user[0])
}

const postUser = async (req, res) => {
    // POST to DB
    await pool.execute('INSERT INTO `users` (`ID`, `Name`, `Age`, `Email`, `Phone`) VALUES (NULL, ?, ?, ?, ?);', [req.body.Name, req.body.Age, req.body.Email, req.body.Phone])
    // Return to form page
    return res.redirect("back")
}

const deleteUser = async (req, res) => {
    // POST Delete to DB
    await pool.execute('DELETE FROM `users` WHERE `ID` = ?', [req.body.UserID])
    // Return to form page
    return res.redirect("back")
}

export { getHomePage, getUser, postUser, deleteUser }