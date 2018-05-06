const mongoose = require('../../config/dbConnection.js');

const UserSchema = new mongoose.Schema ({
  apelido:{
    type: String,
    required: true,
  },
  senha:{
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
console.log(User);
module.exports = User;