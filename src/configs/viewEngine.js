import express from "express";

const configViewEngine = (app) => {
    // setup static folders
    app.use(express.static('./src/public/'))
    // set up template engine (view engine)
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
}

export default configViewEngine