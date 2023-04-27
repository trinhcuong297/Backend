import express from "express";
import { deleteUser, getHomePage, getUser, postUser } from "../controllers/homeController";


const router = express.Router()

const initWebRoute = (app) => {

    // define the home page route
    router.get('/', getHomePage)
    // define the users route
    router.get('/users/:id', getUser)
    // New user
    router.post('/newUser', postUser)
    // Delete user
    router.post('/deleteUser', deleteUser)
    return app.use('/', router)
}

export default initWebRoute