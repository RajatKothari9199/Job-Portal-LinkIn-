const express  = require('express')
const router1 = express.Router()
const UserProfile = require('../models/userProfileSchema')
const User = require('../models/user')
const multer=require('multer')
const mongoose = require('mongoose')
const path = require('path')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./profilePic/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);

    }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});


router1.post("/myProfile", (req, res) => {
    var c;
    User.findOne({email : req.body.personalDetails.email}, (err, data) => {

            c = data.unique_id;
        var ski = [];
            for(var i = 0;i < req.body.skillArray.length;i++)
        {
            ski.push(req.body.skillArray[i]);
        }
        var edu = [];
            for(var i = 0;i < req.body.educationArray.length;i++)
        {
            edu.push(req.body.educationArray[i]);
        }
        var work = [];
            for(var i = 0;i < req.body.workExperienceArray.length;i++)
        {
            work.push(req.body.workExperienceArray[i]);
        }
        var pro = [];
            for(var i = 0;i < req.body.projectDetailsArray.length;i++)
        {
            pro.push(req.body.projectDetailsArray[i]);
        }
        var certi = [];
            for(var i = 0;i < req.body.certificationArray.length;i++)
        {
            certi.push(req.body.certificationArray[i]);
        }
  
  
  
  
    const userProfile = new UserProfile({
            unique_id: c,
           personalDetails : {
            userName: req.body.personalDetails.userName,
            firstName: req.body.personalDetails.firstName,
            lastName: req.body.personalDetails.lastName,
            email: req.body.personalDetails.email,
            address: req.body.personalDetails.address,
            country: req.body.personalDetails.country,
            city: req.body.personalDetails.city,
            postalCode : req.body.personalDetails.postalCode,
            aboutMe: req.body.personalDetails.aboutMe,
            
        },
        education : edu,
        workExperience: work,
        skills : ski,
        
        projectDetails: pro,
        
        certifications: certi
        
        
            
  });
  userProfile
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        "Success": "User details saved successfully",
       
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});
});

router1.get("/myProfile/:email", (req, res) => {
  UserProfile.findOne({"personalDetails.email": { $eq: req.params.email }})
    .select("personalDetails education workExperience projectDetails skills certifications unique_id")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            userProfile: doc,
        });
      } else {
        res
          .status(404)
          .json({ "Success": "No valid entry found for provided emailID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});
router1.patch("/:email", (req, res) => {
  UserProfile.remove({ "personalDetails.email": { $eq: req.params.email }})
    .exec()
    /*.then(result => {
      res.status(200).json({
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });*/

    var c;
    User.findOne({email : req.body.personalDetails.email}, (err, data) => {

        c = data.unique_id;
        var ski = [];
            for(var i = 0;i < req.body.skillArray.length;i++)
        {
            ski.push(req.body.skillArray[i]);
        }
        var edu = [];
            for(var i = 0;i < req.body.educationArray.length;i++)
        {
            edu.push(req.body.educationArray[i]);
        }
        var work = [];
            for(var i = 0;i < req.body.workExperienceArray.length;i++)
        {
            work.push(req.body.workExperienceArray[i]);
        }
        var pro = [];
            for(var i = 0;i < req.body.projectDetailsArray.length;i++)
        {
            pro.push(req.body.projectDetailsArray[i]);
        }
        var certi = [];
            for(var i = 0;i < req.body.certificationArray.length;i++)
        {
            certi.push(req.body.certificationArray[i]);
        }
  
  
  
  
    const userProfile = new UserProfile({
            unique_id: c,
           personalDetails : {
            userName: req.body.personalDetails.userName,
            firstName: req.body.personalDetails.firstName,
            lastName: req.body.personalDetails.lastName,
            email: req.body.personalDetails.email,
            address: req.body.personalDetails.address,
            country: req.body.personalDetails.country,
            city: req.body.personalDetails.city,
            postalCode : req.body.personalDetails.postalCode,
            aboutMe: req.body.personalDetails.aboutMe,
            
        },
        education : edu,
        workExperience: work,
        skills : ski,
        
        projectDetails: pro,
        
        certifications: certi
        
        
            
  });
  userProfile
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        "Success": "User details updated successfully",
       
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});
});

router1.delete("/:email", (req, res) => {
  UserProfile.remove({ "personalDetails.email": { $eq: req.params.email }})
    .exec()
    .then(result => {
      res.status(200).json({
          result   
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
});

module.exports = router1
