const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ratnesh125:Ratnesh%4002@cluster0.2mxjqot.mongodb.net/");
var con = mongoose.connection;
var schema = mongoose.Schema({ _id: String, password: String, name: String, role: String });
var MyModel = mongoose.model("user", schema)
module.exports = MyModel;