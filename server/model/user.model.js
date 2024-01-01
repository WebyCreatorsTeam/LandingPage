const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    userName: { type: String, require: true },
    userEmail: { type: String, require: true },
    userPhone: { type: String, require: true },
    // userHelp: { type: String, require: true }
})

exports.User = model("User", UserSchema)