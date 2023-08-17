const mongoose = require('mongoose');

const connection = async(username,password) => {
    const url =
        `mongodb+srv://${username}:${password}@cluster0.yy8ibeg.mongodb.net/users?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(`Error while connecting with the database ${error}`);
    }
}

module.exports = connection;