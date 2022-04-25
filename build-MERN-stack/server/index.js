const createError = require("http-errors");
const express = require("express");
const path = require("path");
require("dotenv").config();
const logger = require("morgan");
const compression = require("compression");
const mongoose = require("mongoose");
const cors = require("cors");

const postsRouter = require("./routes/posts");

const app = express();
app.use(compression());
app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

// Mongoose connect

app.use(logger("dev"));
app.use(express.json({ limit: "30mb", extended: false }));
app.use(express.urlencoded({ limit: "30mb", extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/posts", postsRouter);

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.CONNECT_URL_DATABASE, {
        useNewUrlParser: true,
        // useCreateIndex: true,
    })
    .then((_) =>
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((err) => console.log(`error database: ${err}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
