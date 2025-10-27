const mongoose = require('mongoose');

const connectDb  = async() => {
    await mongoose.connect('mongodb+srv://prathamsamudra_db_user:C11m6Wx7FsApojyz@namastenode.nxgzvwx.mongodb.net/devTinder');
}




module.exports = {
    connectDb
}
