const adminAuth = (req, res, next) => {
    console.log("user auhentication check");
    const authenticated = true;
    if(authenticated){
        console.log("user authenticated");
        next();
    } else {
        res.status(401).send('unauthorized');
    }
};

module.exports = {
    adminAuth
};