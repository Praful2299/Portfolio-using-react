
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container className="my-5">
            <h2 style={{color:"purple" , textDecoration:"underline"}} className="text-center mb-4">My Curriculam Vitae </h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title style={{textAlign:"center" , textDecoration:"underline"}}>Personal Information</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Name: Praful Shrivastava</ListGroup.Item>
                                <ListGroup.Item>Email: prafulshrivastava22061999.com</ListGroup.Item>
                                <ListGroup.Item>Phone: 9009331507</ListGroup.Item>
                                <ListGroup.Item>Location: Bhopal,MP</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title style={{textAlign:"center" , textDecoration:"underline"}}>Skills</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML & CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>DSA</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={8}>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title style={{textAlign:"center" , textDecoration:"underline"}}>Education Qualification</Card.Title>
                            <div > 
                                <h5>Secondary School Certificate</h5>
                                <p>Dev Mata Hr. Sec School,Bhairunda | MPBSE Board | 2015</p>
                                <p>
                                    I have scored 77.5 % in my senior secondary.
                                </p>
                            </div>
                            <hr />
                            <div >
                                <h5>Higher Secondary School Certificate</h5>
                                <p>Shubham Convent School,Bhairunda |MPBSE Board | 2017</p>
                                <p>
                                I have scored 83.6 % in my higher secondary.
                                </p>
                            </div>
                            <hr />
                            <div >
                                <h5>Bachelore Of Science(Computer Science)</h5>
                                <p>Career College,Bhopal|Barkatullah University | 2020</p>
                                <p>
                                I have scored 71.03 % in my under graduation.
                                </p>
                            </div>
                            <hr />
                            <div >
                                <h5>Master Of Business Administration(Finance&Marketing)</h5>
                                <p>Technocrats Institute Of Technology,Bhopal|Barkatullah University | 2022</p>
                                <p>
                                I have scored 75.3 % in my post graduation.
                                </p>
                            </div>
                           
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title style={{textAlign:"center" , textDecoration:"underline"}}>VIRTUAL INTERNSHIPS</Card.Title>
                            <div>
                                <h5> Screening Resumes and Performing telephonic interviews</h5>
                                <p>Aashman Foundation  |  6 Months ( August 2020 to January 2021 ) </p>
                            </div>
                            
                            {/* Add more certifications as needed */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;
