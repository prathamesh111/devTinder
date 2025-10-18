const express = require('express');

const app = express();

app.use('/test',(req, res) => {
    res.send('testing page');
});


app.use("/api",(req, res)=>{
    res.send('404 page not found');
})
app.use("/",(req, res) => {
    res.send('Hello World');
});




app.listen(3001, ()=>{
    console.log("successfully started server on port 3001");
})