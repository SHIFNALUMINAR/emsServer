const mongoose = require('mongoose')
// const validator=require('validator')

const employeeSchema=new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    lname:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        // validator(value){
        //     if(!validator.isEmail(value)){
        //         throw Error("invalid email")
        //     }
        // }
    },
    phn: {
        type: String,
        minlength:10,
        maxlength:13
    },
    gender: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        
        trim: true
    },
    profile: {
        type: String,
        required: true,
        
    },
    location:{
        type:String,
        required:true,
        
    },
    mobile:{
        type:String,
        required:true
    }

})

const employees =new mongoose.model('employees',employeeSchema)

module.exports=employees