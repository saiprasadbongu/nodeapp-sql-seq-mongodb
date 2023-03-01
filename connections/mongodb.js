const mongoose = require("mongoose");
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.set('strictQuery', true);

const uri = `mongodb+srv://saiprasad:saiprasad@cluster0.iyzvwvj.mongodb.net/?retryWrites=true&w=majority`;
const connection = mongoose
    .connect(uri, connectionParams)
    .then(() => {
        console.log("Connected to database mongoDB");

    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

module.exports = connection;