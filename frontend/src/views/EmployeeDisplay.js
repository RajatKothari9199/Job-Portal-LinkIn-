import React from "react";
import Moment from 'react-moment';
import { faCalendar, faCalendarDay, faCheckCircle, faCircle, faDotCircle, faGraduationCap, faIcons, faImage, faMap, faMapMarked, faMapMarker, faMapPin, faMapSigns, faPlus, faSchool, faStickyNote, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
class EmployeeDisplay extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      personalDetails : {
        userName : "",
        firstName : "",
        lastName : "",
        email : "",
        address : "",
        city : "",
        country : "",
        postalCode : "",
        aboutMe : ""
      },
      workExperience : {
        title : "",
        headline : "", 
      },
      skillArray : [],
      educationArray : [],
      
      workExperienceArray : [],
      
      projectDetailsArray : [],
      
      certificationArray : []
      
  };
  
  }
  
  componentDidMount()
  {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:4000/myProfile/' + window.name,
  headers: { 
    'Content-Type': 'application/json'
  },
};

axios(config)
.then( (response) => {
  this.setState({
    personalDetails:response.data.userProfile.personalDetails,
    educationArray:response.data.userProfile.education,
    workExperienceArray:response.data.userProfile.workExperience,
    skillArray:response.data.userProfile.skills,
    projectDetailsArray:response.data.userProfile.projectDetails,
    certificationArray:response.data.userProfile.certifications,
  });
})
.catch(function (error) {
  console.log(error);
});


  }


  render() {
    //var work = this.state.workExperienceArray[0];
    
  
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user" >
                <CardBody>
                  <div className="author" >
                    <img
                    className="avatar border-gray"
                    alt="..."
                    style={{marginTop: "100px"}}
                    height = "125px"
                    width = "75px"
                    src={require("./prakhar1.jpg")}
                  />
                    <h5 className="title" >{this.state.personalDetails.firstName} {this.state.personalDetails.lastName}</h5>
                    <p className="title" >{this.state.workExperienceArray.length > 0?this.state.workExperienceArray[0].title: this.state.workExperience.title}</p>
    <p style = {{marginLeft : "0px"}}><FontAwesomeIcon icon={faEnvelope} />   {this.state.personalDetails.email}</p>
                    <hr/>
    <p><FontAwesomeIcon icon={faMapMarker} />  {this.state.personalDetails.city}, {this.state.personalDetails.country}</p>
                    <hr/>
                    <p><FontAwesomeIcon icon={faSuitcase} />  {this.state.workExperienceArray.length > 0?this.state.workExperienceArray[0].headline: this.state.workExperience.headline}</p>
                  </div>
                
                </CardBody>
                
              </Card>
              
            </Col>
            <Col md="8">
              <Card className="card-user" style={{height : "auto",width : "500px"}}>
                <CardHeader>
                  <CardTitle tag="h5">Professional Summary</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                      <p style = {{marginLeft : "10px",marginRight : "10px"}}>{this.state.personalDetails.aboutMe}</p>
                    </Row>
                    
                </CardBody>
              </Card>
              <Card className="card-user" style={{height : "auto",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Education</CardTitle>
              </CardHeader>
              <CardBody>
              {this.state.educationArray.length > 0?this.state.educationArray.map((education,index)=>(
              <div>
              <Row>
              <p style = {{marginBottom : "0px",marginLeft : "15px",marginRight : "15px"}}><strong>{education.degree} in {education.fieldOfStudy}</strong></p>
                      
              </Row>
              <Row style = {{marginTop : "0px"}}>
              <p style = {{marginLeft : "15px",fontSize : "11px", fontColor : "grey"}}><FontAwesomeIcon icon={faGraduationCap} />  {education.university}</p>
              <p style = {{marginLeft : "285px",fontSize : "11px",marginRight : "15px", fontColor : "grey"}}><FontAwesomeIcon icon={faCalendar} />   <Moment format="YYYY/MM/DD">
                {education.fromYear}
            </Moment> - <Moment format="YYYY/MM/DD">
                {education.fromYear}
            </Moment></p>
                      <hr/>
              </Row>
              </div>
              )):<div><p>No Education Details found</p></div>
              
  }
              </CardBody>
            
            </Card>
            <Card className="card-user" style={{height : "auto",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Work Experience</CardTitle>
              </CardHeader>
              <CardBody>
                
              {this.state.workExperienceArray.length > 0?this.state.workExperienceArray.map((workExperience,index)=>(
                <div><Row>
                      <p style = {{marginBottom : "0px",marginLeft : "15px",marginRight : "15px"}}><strong>{workExperience.title}</strong></p>
                      
              </Row>
              <Row style = {{marginTop : "0px"}}>
              <p style = {{marginLeft : "15px",fontSize : "11px", fontColor : "grey"}}><FontAwesomeIcon icon={faStickyNote} />  {workExperience.company}</p>
              <p style = {{marginLeft : "40px",fontSize : "11px",marginRight : "15px", fontColor : "grey"}}><FontAwesomeIcon icon={faMapMarked} />  {workExperience.location}</p>
                      <p style = {{marginRight : "15px",marginLeft : "180px",fontSize : "11px", fontColor : "grey"}}><FontAwesomeIcon icon={faCalendar} />  <Moment format="YYYY/MM/DD">
                {workExperience.from}
            </Moment> - <Moment format="YYYY/MM/DD">
                {workExperience.to}
            </Moment></p>
                      
                      <hr/>
              </Row>
              </div>)):<div><p>No Work Experience found</p></div>}
             
              </CardBody>
            
            </Card>
            <Card className="card-user" style={{height : "auto",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Skills</CardTitle>
              </CardHeader>
              <CardBody>
              {this.state.skillArray.length > 0?this.state.skillArray.map((skills,index)=>(
                <div>
                <Row>
              <p style = {{marginBottom : "0px",marginLeft : "15px",marginRight : "15px",fontSize : "15px", fontColor : "grey"}}><FontAwesomeIcon icon={faCheckCircle} style = {{marginRight : "12px"}}/>{skills.skill}</p>
                      
              </Row>
              </div>)):<div><p>No Skills found</p></div>}
             
              </CardBody>
            
            </Card>
            <Card className="card-user" style={{height : "auto",width : "500px"}}>
                <CardHeader>
                  <CardTitle tag="h5">Projects</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.projectDetailsArray.length > 0?this.state.projectDetailsArray.map((projectDetails,index)=>(
                <div>
         
                <Row>
                      <h6 style = {{marginLeft : "15px",marginRight : "15px",fontSize : "15px"}}><strong>Project No. {index+1}</strong></h6>
                    </Row>
                    
                    <Row>
                <p style = {{marginLeft : "15px",marginRight : "15px"}}>{projectDetails.enterDetails}</p>
                    </Row>
                    </div>)):<div><p>No Projects found</p></div>}

                    <hr/>
                    
                    
                </CardBody>
              </Card>
              <Card className="card-user" style={{height : "auto",width : "500px"}}>
                <CardHeader>
                  <CardTitle tag="h5">Certificates</CardTitle>
                </CardHeader>
                <CardBody>
                {this.state.certificationArray.length > 0?this.state.certificationArray.map((certifications,index)=>(
                <div>
         
                <Row>
                <h6 style = {{marginLeft : "15px",marginRight : "15px",fontSize : "15px"}}><strong>Certificate No. {index+1}</strong></h6>
                    </Row>
                    
                    <Row>
                <p style = {{marginLeft : "15px",marginRight : "15px"}}>{certifications.certificate}</p>
                    </Row> 
                    <hr/>
                    </div>)):<div><p>No Certificates found</p></div>}

                </CardBody>
              </Card>
        
            </Col>
          </Row>
         
        </div>
              </>
      
    );
  }
}

export default EmployeeDisplay;