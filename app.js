const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const corsMiddleware = require('./src/middlewares/cors');
const errorHandler = require('./src/middlewares/errorHandler');
dotenv.config();
const PORT = process.env.PORT;

const dbconnect = require("./src/config/dbconfig");
dbconnect.dbconnect();

const user = require('./src/routes/user');
const tailor = require("./src/routes/tailor");

app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/v1/user", user);
app.use("/api/v1/tailor", tailor);

app.use(errorHandler);

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ message: "output" });
});

app.listen(PORT, (err) => {
    if (err) { 
        console.log("Error : " + err);
    } else { 
        console.log(`Listening on port ${PORT}`); 
    }
});

