import React from "react";
import {
  UncontrolledAlert,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class Notifications extends React.Component {
  state = {
    visible: true,
  };
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              
                <CardBody>
                  <Row >
                    <Col md="6" >
                      <Card className="card-plain" style={{marginLeft: "0px",marginTop : "75px"}}>
                        <CardHeader style={{marginTop: "-120px"}}>
                          <CardTitle tag="h5">Recent Notifications</CardTitle>
                        </CardHeader>
                        <CardBody >
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              You got a mesage from Arun.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              You got a mesage from Arunima.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              You got a mesage from Arjun.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              You got a mesage from Arav.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              You got a mesage from Astu.
                            </span>
                          </UncontrolledAlert>
                          
                            </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Notifications;
