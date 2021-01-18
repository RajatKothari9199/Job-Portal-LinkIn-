import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// reactstrap components
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

class EmployeeEdit extends React.Component {
  constructor(props){
  super(props);
  this.inputRef = React.createRef()
    this.state = {
    isModalWorkExperienceOpen: false,
    isModalEducationOpen: false,
    isModalSkillsOpen: false,
    isModalProjectDetailsOpen: false,
    isModalCertificationsOpen: false,
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
    education : {
      university : "",
      degree : "",
      fieldOfStudy : "",
      grade : "",
      fromYear : "",
      toYear : "",
      description : ""
    },
    workExperience : {
      title : "",
      company : "",
      from : "",
      to : "",
      headline : "", 
      location : "",
      description : ""
    },
    skills : {
      skill : ""
    },
    projectDetails : {
      enterDetails : ""
    },
    certifications : {
      certificate : ""
    },
    skillArray : [],
    educationArray : [],
    
    workExperienceArray : [],
    
    projectDetailsArray : [],
    
    certificationArray : []
    
};

this.toggleWorkExperienceModal = this.toggleWorkExperienceModal.bind(this);
this.toggleEducationModal = this.toggleEducationModal.bind(this);
this.toggleSkillsModal = this.toggleSkillsModal.bind(this);
this.toggleProjectDetailsModal = this.toggleProjectDetailsModal.bind(this);
this.toggleCertificationsModal = this.toggleCertificationsModal.bind(this);

}



focusInput()
{
  this.inputRef.current.focus()
}

submitHandler= (e) =>{
  e.preventDefault()
  var axios = require('axios');
  //var data = JSON.stringify({"personalDetails":{"userName":"this.state.personalDetails.userName","firstName":"a","lastName":"a","email":"jainrjk9199@gmail.com","address":"150","country":"India","city":"PNP","postalCode":"132103","aboutMe":"Me"},"education":[{"university":"ty","degree":"ee","fieldOfStudy":"dy","grade":"de","fromYear":"01/01/1999","toYear":"10/02/2001","description":"ion"},{"university":"pre","degree":"eee","fieldOfStudy":"dityy","grade":"deeer","fromYear":"01/01/2000","toYear":"08/19/1354","description":"in"}],"workExperience":[{"title":"tle","company":"pany","headline":"dline","location":"ation","from":"10/10/2455","to":"02/02/1985","description":"ription"}],"skills":[{"skill":"kill"},{"skill":"ill"}],"projectDetails":[{"enterDetails":"ils"}],"certification":[{"addCertificate":"icate"}]});
  var data = JSON.stringify(this.state);
  console.log(data);
  var config = {
    method: 'patch',
    url: 'http://localhost:4000/'+this.state.personalDetails.email,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
}

SubmitHandleSkills= (e) =>{
  e.preventDefault()

var skillArray = this.state.skillArray;
skillArray.push(this.state.skills);
this.setState({skillArray:skillArray})
this.setState({skills:{}})
this.toggleSkillsModal();
}

SubmitHandleEducation= (e) =>{
  e.preventDefault()
var educationArray = this.state.educationArray;
educationArray.push(this.state.education);
this.setState({educationArray:educationArray})
this.setState({education:{}})
this.toggleEducationModal();
}

SubmitHandleWorkExperience= (e) =>{
  e.preventDefault()
var workExperienceArray = this.state.workExperienceArray;
workExperienceArray.push(this.state.workExperience);
this.setState({workExperienceArray:workExperienceArray})
this.setState({workExperience:{}})
this.toggleWorkExperienceModal();
}

SubmitHandleProjectDetails= (e) =>{
  e.preventDefault()
var projectDetailsArray = this.state.projectDetailsArray;
projectDetailsArray.push(this.state.projectDetails);
this.setState({projectDetailsArray:projectDetailsArray})
this.setState({projectDetails:{}})
this.toggleProjectDetailsModal();
}

SubmitHandleCertification= (e) =>{
  e.preventDefault()
var certificationArray = this.state.certificationArray;
certificationArray.push(this.state.certifications);
this.setState({certificationArray:certificationArray});
this.setState({certifications:{}});
console.log(this.state.certificationArray);  
this.toggleCertificationsModal();
}

onChangePersonalDetails = (e) => {
var personalDetails = this.state.personalDetails;
personalDetails[e.target.name] = e.target.value;
this.setState({personalDetails:personalDetails})

}


onChangeEducation = (e) => {
  var education = this.state.education;
  education[e.target.name] = e.target.value;
  this.setState({education:education})
  
  }
  
onChangeWorkExperience = (e) => {
  var workExperience = this.state.workExperience;
  workExperience[e.target.name] = e.target.value;
  this.setState({workExperience:workExperience})
  
  }
  
onChangeSkills = (e) => {
  var skills = this.state.skills;
  skills[e.target.name] = e.target.value;
  this.setState({skills:skills})
  
  }
  
onChangeProjectDetails = (e) => {
  var projectDetails = this.state.projectDetails;
  projectDetails[e.target.name] = e.target.value;
  this.setState({projectDetails:projectDetails})
  
  }
  
onChangeCertifications = (e) => {
  var certifications = this.state.certifications;
  certifications[e.target.name] = e.target.value;
  this.setState({certifications:certifications})
  console.log(this.state.certifications)  
}

toggleWorkExperienceModal() {
  this.setState({
    isModalWorkExperienceOpen: !this.state.isModalWorkExperienceOpen
  });
}

toggleEducationModal() {
  this.setState({
    isModalEducationOpen: !this.state.isModalEducationOpen
  });
}

toggleSkillsModal() {
  this.setState({
    isModalSkillsOpen: !this.state.isModalSkillsOpen
  });
}

toggleProjectDetailsModal() {
  this.setState({
    isModalProjectDetailsOpen: !this.state.isModalProjectDetailsOpen
  });
}

toggleCertificationsModal() {
  this.setState({
    isModalCertificationsOpen: !this.state.isModalCertificationsOpen
  });
}
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("../assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <input type = {Image}
                      
                        className="avatar border-gray"
                      />
                      <h5 className="title">Username</h5>
                    </a>
                  </div>
                
                </CardBody>
                
              </Card>
              
            </Col>
            <Col md="8">
              <Card className="card-user" style={{height : "auto",width : "500px"}}>
                <CardHeader>
                  <CardTitle tag="h5">Personal Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit = {this.submitHandler}>
                    <Row>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            placeholder="Username"
                            type="text"
                            ref = {this.inputRef}
                            name = "userName"
                            onChange = {this.onChangePersonalDetails}
                            value = {this.state.personalDetails.userName}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input 
                          placeholder="Email" 
                          type="email"
                          ref = {this.inputRef}
                          name = "email"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.email} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="firstName" 
                            type="text"
                            ref = {this.inputRef}
                            name = "firstName"
                            onChange = {this.onChangePersonalDetails}
                            value = {this.state.personalDetails.firstName}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            placeholder="lastName" 
                            type="text"
                            ref = {this.inputRef}
                            name = "lastName"
                            onChange = {this.onChangePersonalDetails}
                            value = {this.state.personalDetails.lastName}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                          placeholder="address" 
                          type="text"
                          ref = {this.inputRef}
                          name = "address"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.address}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                          placeholder="city" 
                          type="text"
                          ref = {this.inputRef}
                          name = "city"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.city}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                          placeholder="country" 
                          type="text"
                          ref = {this.inputRef}
                          name = "country"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.country}/>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="postalCode" 
                          type="text"
                          ref = {this.inputRef}
                          name = "postalCode"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.postalCode} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                          placeholder="aboutMe" 
                          type="text"
                          ref = {this.inputRef}
                          name = "aboutMe"
                          onChange = {this.onChangePersonalDetails}
                          value = {this.state.personalDetails.aboutMe}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </Form>
                </CardBody>
              </Card>
              <Card className="card-user" style={{height : "150px",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Education</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          
                          outline onClick={this.toggleEducationModal}>
                            <FontAwesomeIcon icon={faPlus} /></Button>
                      </div>
                    </Row>
                </Form>
              </CardBody>
            
            </Card>

              <Card className="card-user" style={{height : "150px",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Work Experience</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          
                          outline onClick={this.toggleWorkExperienceModal}>
                            <FontAwesomeIcon icon={faPlus} /></Button>
                      </div>
                    </Row>
                </Form>
              </CardBody>
            
            </Card>

              <Card className="card-user" style={{height : "150px",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Skills</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          
                          outline onClick={this.toggleSkillsModal}>
                            <FontAwesomeIcon icon={faPlus} /></Button>
                      </div>
                    </Row>
                </Form>
              </CardBody>
            
            </Card>
            <Card className="card-user" style={{height : "150px",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Project Details</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          
                          outline onClick={this.toggleProjectDetailsModal}>
                            <FontAwesomeIcon icon={faPlus} /></Button>
                      </div>
                    </Row>
                </Form>
              </CardBody>
            
            </Card>
            <Card className="card-user" style={{height : "150px",width : "500px"}}>
              
              <CardHeader>
                <CardTitle tag="h5">Certifications</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          
                          outline onClick={this.toggleCertificationsModal}>
                            <FontAwesomeIcon icon={faPlus} /></Button>
                      </div>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.submitHandler}
                        
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                </Form>
              </CardBody>
            
            </Card>
              
            </Col>
          </Row>
         
        </div>
        <Modal isOpen={this.state.isModalSkillsOpen} toggle={this.toggleSkillsModal}
        style={{width: "800px"}}>
                    <ModalHeader toggle={this.toggleSkillsModal} >Add a skill</ModalHeader>
        <ModalBody>
        <Form>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Skills </label>
                          <Input
                            defaultValue="Ex-java"
                            placeholder="skills"
                            type="text"
                            ref = {this.inputRef}
                            name = "skill"
                            onChange = {this.onChangeSkills}
                            value = {this.state.skills.skill}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                      <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.SubmitHandleSkills}
                        >
                          Update Skills
                        </Button>
                      </div>
                    </Row>
                  </Form>
        </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isModalProjectDetailsOpen} toggle={this.toggleProjectDetailsModal}
        style={{width: "800px"}}>
                    <ModalHeader toggle={this.toggleProjectDetailsModal} >Add a project</ModalHeader>
        <ModalBody>

        <Form>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Enter Details </label>
                          <Input
                            defaultValue=""
                            placeholder="projectdetails"
                            type="text"
                            ref = {this.inputRef}
                            name = "enterDetails"
                            onChange = {this.onChangeProjectDetails}
                            value = {this.state.projectDetails.enterDetails}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                      <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.SubmitHandleProjectDetails}
                        
                        >
                          Update Project Details
                        </Button>
                      </div>
                    </Row>
                    
                  </Form>
        </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isModalCertificationsOpen} toggle={this.toggleCertificationsModal}
        style={{width: "800px"}}>
                    <ModalHeader toggle={this.toggleCertificationsModal} >Add certificate</ModalHeader>
        <ModalBody>
        
        <Form>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Add Certificate </label>
                          <Input
                            defaultValue=""
                            placeholder="certificate"
                            type="text"
                            ref = {this.inputRef}
                            name = "certificate"
                            onChange = {this.onChangeCertifications}
                            value = {this.state.certifications.certificate}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                      <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.SubmitHandleCertification}
                        
                        >
                          Update Certificate
                        </Button>
                      </div>
                    </Row>
                    </Form>
        </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isModalEducationOpen} toggle={this.toggleEducationModal}
        style={{width: "800px"}}>
                    <ModalHeader toggle={this.toggleEducationModal} >Add Education</ModalHeader>
                    <ModalBody>
                    <Form>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>University </label>
                          <Input
                            defaultValue="Ex-BITS Pilani"
                            placeholder="university"
                            type="text"
                            ref = {this.inputRef}
                            name = "university"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.university}
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Degree</label>
                          <Input
                            defaultValue="Ex - Bachelors"
                            placeholder="degree"
                            type="text"
                            ref = {this.inputRef}
                            name = "degree"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.degree
                          }
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                    <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Field Of Study </label>
                          <Input
                            defaultValue="Ex - Civil"
                            placeholder="fieldOfStudy"
                            type="text"
                            ref = {this.inputRef}
                            name = "fieldOfStudy"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.fieldOfStudy}
                          />
                        </FormGroup>
                      </Col>
                    
                    </Row>
                    <Row>
                    <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Grade </label>
                          <Input
                            defaultValue="Grade"
                            placeholder="grade"
                            type="text"
                            ref = {this.inputRef}
                            name = "grade"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.grade}
                          />
                        </FormGroup>
                      </Col>
                    
                    </Row>
                    <Row>
                      <Col className="pl-1" md="5">
                        <FormGroup style = {{marginLeft : "10px"}}>
                        <label id="work-exp-form">From year</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="From"
                          ref = {this.inputRef}
                            name = "fromYear"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.fromYear}
                        />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                        <label id="work-exp-form">To year</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="To"
                          ref = {this.inputRef}
                            name = "toYear"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.toYear}
                        />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                    <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Description </label>
                          <Input
                            defaultValue=""
                            placeholder="description"
                            type="textarea"
                            ref = {this.inputRef}
                            name = "description"
                            onChange = {this.onChangeEducation}
                            value = {this.state.education.description}
                          />
                        </FormGroup>
                      </Col>
                    
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                      <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.SubmitHandleEducation}
                        
                        >
                          Update Education
                        </Button>
                      </div>
                    </Row>
                    </Form>
            
                    </ModalBody>
                </Modal>
        <Modal isOpen={this.state.isModalWorkExperienceOpen} toggle={this.toggleWorkExperienceModal}
        style={{width: "800px"}}>
                    <ModalHeader toggle={this.toggleWorkExperienceModal} >Add Experience</ModalHeader>
                    <ModalBody>
                    <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Title </label>
                        <Input
                          defaultValue="Ex-Manager"
                          placeholder="Title"
                          type="text"
                          ref = {this.inputRef}
                            name = "title"
                            onChange = {this.onChangeWorkExperience}
                            value = {this.state.workExperience.title}
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          defaultValue="Ex - Microsoft"
                          placeholder="Company"
                          type="text"
                          
                          ref = {this.inputRef}
                            name = "company"
                            onChange = {this.onChangeWorkExperience}
                            value = {this.state.workExperience.company}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="5">
                      <FormGroup style = {{marginLeft : "10px"}}>
                      <label id="work-exp-form">From *</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="From"
                        
                        ref = {this.inputRef}
                        name = "from"
                        onChange = {this.onChangeWorkExperience}
                        value = {this.state.workExperience.from}
                      />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="5">
                      <FormGroup>
                      <label id="work-exp-form">To *</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="To"
                        
                        ref = {this.inputRef}
                        name = "to"
                        onChange = {this.onChangeWorkExperience}
                        value = {this.state.workExperience.to}
                      />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>HeadLine </label>
                        <Input
                          defaultValue=""
                          placeholder="headline"
                          type="text"
                          
                          ref = {this.inputRef}
                            name = "headline"
                            onChange = {this.onChangeWorkExperience}
                            value = {this.state.workExperience.headline}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                  <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Location </label>
                        <Input
                          defaultValue="place"
                          placeholder="location"
                          type="text"
                          
                          ref = {this.inputRef}
                            name = "location"
                            onChange = {this.onChangeWorkExperience}
                            value = {this.state.workExperience.location}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                  <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Description </label>
                        <Input
                          defaultValue=""
                          placeholder="description"
                          type="textarea"
                          
                          ref = {this.inputRef}
                            name = "description"
                            onChange = {this.onChangeWorkExperience}
                            value = {this.state.workExperience.description}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                      <div className="update ml-auto mr-auto">
                      <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.SubmitHandleWorkExperience}
                        
                        >
                          Update Experience
                        </Button>
                      </div>
                    </Row>
                </Form>
              
            
                    </ModalBody>
                </Modal>
      </>
      
    );
  }
}

export default EmployeeEdit;