const express = require("express");
const dbconnect = require("./db/dbConnection");
const router = require("./routes/v1");

const app = express();

app.listen(3000,
     () => {
        console.log("server runing...!");
    }
);

app.use(express.json())

app.use("/v1",router)

dbconnect()