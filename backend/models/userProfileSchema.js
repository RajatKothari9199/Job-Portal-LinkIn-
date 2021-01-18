const mongoose = require('mongoose')
var Schema = mongoose.Schema;


userProfileSchema = new Schema({
    unique_id: Number,
    personalDetails : {
    userName: {
        type : String,
        required : true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    postalCode: {
        type : String,
        required : true
    },
    aboutMe : {
        type : String,
        required : true
    }
},

    /*
    dateOfBirth:{
        type : Date,
        required:true,
        default : Date.now()
    },
    currentEmploymentStatus:{
        type : String,
        required : true 
    },
    currentJobTitle:{
        type : String,
        required : true 
    },
    seekingJobTitle:{
        type : String,
        required : true 
    },
    industry:{
        type : String,
        required : true 
    },*/
    /*aboutMe:{
        type : String,
        required : true 
    },*/
    education: [
        {
            university : String,
            degree : String,
            fieldOfStudy : String,
            grade : String,
            fromYear : Date,
            toYear : Date,
            description : String
        }
    ],
    
    workExperience: [
        {
            title: String,
            company : String,
            headline : String,
            location : String,
            from : Date,
            to : Date,
            description : String
        }
    ],
    skills: [
        {
            skill : String
        }
    ],
    
    projectDetails: [
        {
            enterDetails : String
        }
    ],
    
    certifications: [
        {
            certificate : String
        }
    ]
    /*resume:{
        type : String,
        required : true 
    },
    currentlyWorkingIn:{
        type : String,
        required : true 
    },
    startDate : {
        type : Date,
        required:true,
        default : Date.now()
    }*/
});

UserProfile = mongoose.model('UserProfile',userProfileSchema);
module.exports = UserProfile;
