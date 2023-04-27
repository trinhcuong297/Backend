import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";

require('dotenv').config()

const app = express();
const port = process.env.PORT;

// Config for request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config view engine
configViewEngine(app)

// Init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})