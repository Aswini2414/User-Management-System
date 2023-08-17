const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require('./database/db.js');
const Routes = require("./routes/route.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT||8000;
dotenv.config();//initializing
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
connection(username,password);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})