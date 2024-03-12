
const mongoose = require('mongoose');

async function connect() {
    try {
        // mongoose DB database connect
        await mongoose.connect('mongodb://localhost:27017/seller', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('Connect sucessfully');
    } catch (error) {
        console.log('Connect failure');
    }
    
}

module.exports = { connect };
