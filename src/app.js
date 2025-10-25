const express = require('express');


const app = express();
const {adminAuth} = require('./middleewares/auth');

// app.get('/user/:userId',(req, res) => {
//     console.log(req.params.userId)
//     res.send('testing page get');
// });


// app.post("/user",(req, res) => {
//      res.send('testing page post');
// });


// app.delete("/user",(req, res) => {
//     res.send('testing page delete');
// });

// app.patch("/user",(req, res) => {
//     res.send('testing page patch');
// })

// app.use('/test', (req, res, next)=>{
//     console.log("middleware called");   
//     // res.send('testing middleware');
//     next();
// }, (req, res, next)=>{
//     console.log("second middleware called");
//     next();
// },(req, res, next)=>{
//     console.log("second middleware called");
//     next();
// },(req, res, next)=>{
//     res.send("final middleware called");
//     next();
// })


// app.use('/admin',adminAuth);

app.get('/admin/getAllUsers',adminAuth, (req, res) => {
    res.send('list of all users');
});

app.listen(7777, ()=>{
    console.log("successfully started server on port 7777");
})