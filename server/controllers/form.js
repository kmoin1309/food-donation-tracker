const User = require("../models/user");

exports.submitFrom = async (req, res) => {
    try{
        //data fetch
        const {name, email,address,plates,date,typeOfFood} = req.body;

        //data verificaton
        if(!name || !email || !address || !plates || !date || !typeOfFood ){
            return res.status(400).json({
                success:false,
                message:'Please fill all details correctly',
            });
            
            // create a form instance 
            const newContact = new User({
                name:name,
                email:email,
                address:address,
                date:date,
                plates:plates,
                address,address,
            });

            await newContact.save();

            return res.status(201).json({
                success:true,
                message:'Form submitted Successfully',
            });
        }
            
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"From cannot be Submitted , Please try again",
        });

    }
}