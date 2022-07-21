import mongoose from 'mongoose';

const UserSchema= mongoose.Schema({
    name:String,
    email:String,
    accessToken:String,
    tokens:[String],
});

let User = mongoose.model("users",UserSchema);

export default User;