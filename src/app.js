const express = require('express');


const app = express();

app.get("/admin", (req, res)=>{
    throw new Error('Server error in admin route');
});

app.use("/",(err,req, res, next) => {
    if(err){
        // console.error(err);
        res.status(502).send('Some error occured at server');
    }

});

app.listen(7777, ()=>{
    console.log("successfully started server on port 7777");
})