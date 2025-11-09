const express = require('express');
const { connectDb } = require('./config/database');

const app = express();

const User = require('./models/user');
app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send("user signed up successfully");
    } catch (err) {
        res.status(500).send("Error saving user");
    }
})

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try{
      const users = await User.find({emailId: userEmail});
      if(users.length === 0){
        res.status(404).send("No users found");
      } else{
        res.send(users);
      }
    }catch(err){
        res.status(400).send("Error fetching user");
    }
});

app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(400).send("Error fetching users");
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


