import React from 'react'
import {Button, Col, Form, Row} from "react-bootstrap"
import Alert from 'react-bootstrap/Alert'
import './MainPage.css'

function CreateNeed(){

    // @ts-ignore
    return(
        <div className="MainPage">
            <div className="Create-Need-Form">
               <Form>
                   <Form.Group>
                       <Alert.Heading>Create a Need</Alert.Heading>
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>Praesent semper velit vitae leo molestie eleifend.<br/>Nam porta urna vel fermentum maximus.</Form.Label>
                   </Form.Group><br/>
                   <Row>
                       <Col>
                            <Form.Label>Need title</Form.Label>
                       </Col>
                       <Col>
                            <Form.Label>select the type of need</Form.Label>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                            <Form.Control type="text" placeholder="Enter your need title"/>
                       </Col>
                       <Col>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Food</option>
                                <option>Medicine</option>
                                <option>Education</option>
                                <option>Others</option>
                            </Form.Control>
                          </Col>
                   </Row><br/>
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="Describe your need"/>
                   </Form.Group>
                   <Row>
                          <Col>
                            <Form.Label>Start Date</Form.Label>
                          </Col>
                          <Col>
                              <Form.Label>End Date</Form.Label>
                          </Col>
                   </Row>
                   <Row>
                          <Col>
                            <Form.Control type="date" placeholder="Select start date"/>
                          </Col>
                          <Col>
                                <Form.Control type="date" placeholder="Select end date"/>
                          </Col>
                   </Row><br/>
                   <Form.Group>
                        <Form.Label>Upload Document</Form.Label>
                        <Form.Control type="file" />
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>How to fulfill the need</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="If financial then share Bank a/c details, or Gpay , etc)"/>
                   </Form.Group><br/>
                   <Row>
                       <Col>
                   <div className="d-grid gap-2">
                        <Button variant="primary" size="sm">
                            Create Need
                        </Button>
                   </div>
                       </Col>
                       <Col>
                     <div className="d-grid gap-2">
                        <Button variant="outline-primary" size="sm">
                            save Draft
                        </Button>
                        </div>
                       </Col>
                  </Row>
               </Form>
            </div>

        </div>

    )
}

export default CreateNeed

