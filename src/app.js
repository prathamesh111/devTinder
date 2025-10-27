const express = require('express');
const { connectDb } = require('./config/database');

const app = express();

const User = require('./models/user');

app.post("/signup", async (req, res) => {

    try {
        const user = new User({
            firstName: "priyanka",
            lastName: "Samudra",
            emailId: "priyanka512@gmail.com",
            password: "priyanka@123",
        });

        await user.save();
        res.send("user signed up successfully");
    } catch (err) {
        res.status(500).send("Error saving user");
    }

})


connectDb().then(() => {
    console.log("database connected successfully");
    app.listen(7777, () => {
        console.log("successfully started server on port 7777");
    })
}).catch((err) => {
    console.log("error connecting to database", err);
})


