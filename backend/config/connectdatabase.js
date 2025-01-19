const mongoose = require('mongoose');

const connectdatabse = () => {
    mongoose.connect(process.env.DB_URL).then((con) =>  {
        console.log('mongo db connected to host:'+con.connection.host) 
    })

};

module.exports = connectdatabse;