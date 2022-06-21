// connect to mongoose
const mongoose = require('mongoose');

// wrap mongoose around local connection
mongoose.connect( process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vintageDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;