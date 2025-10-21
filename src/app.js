const express = require('express');

const app = express();

app.get('/user',(req, res) => {
    res.send('testing page get');
});


app.post("/user",(req, res) => {
     res.send('testing page post');
});


app.delete("/user",(req, res) => {
    res.send('testing page delete');
});

app.patch("/user",(req, res) => {
    res.send('testing page patch');
})
app.listen(7777, ()=>{
    console.log("successfully started server on port 7777");
})