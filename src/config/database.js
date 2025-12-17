const mongoose = require('mongoose');

const connectDb  = async() => {
    await mongoose.connect('mongodb+srv://prathamsamudra_db_user:Express%402026@namastenode.nxgzvwx.mongodb.net/devTinder');
}




module.exports = {
    connectDb
}
