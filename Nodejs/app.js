const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const userRouter = require("./router/data-router")
const app = express();


mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRouter)
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.status(201).json({
        message: error.message
    })
})




app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*')
    req.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'POST', ' GET', 'PUT', 'DELETE')
    }
    return res.status(200).json({

    });
    next();
})


app.listen(3000, () => {
    console.log("server start");
})