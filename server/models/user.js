const { default: mongoose } = require("mongoose")

exports.userSchema = async (req, res) => {
    try{
        const userSchema = mongoose.Schema({
            name:{
                type:String,
            },
            email:{
                type:String,
            },
            address:{
                type:String,
            },
            plates:{
                type:Number,
            },
            date:{
                type:Number,
            },
            typeOfFood:{
                type:String,
            },
        })
    }
    catch(error){
        console.log(error);
    }
}