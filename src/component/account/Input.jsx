import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../css_style/inputProfile.css'

function GridBasicExample() {
    return (
        <Form>
            <Row>
                <h3 className='profile-personal'>personal details</h3>
                <Row>
                    <Col>
                        <Form.Group className="mb-6" >
                            <Form.Label className='profile_label'>First Name</Form.Label>
                            <Form.Control type="text" className='profile_input' style={{ borderRadius: 0, fontSize: '13px' }} placeholder="Enter Your Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-6" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' placeholder=" Enter your last name" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-6" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='text' placeholder="Enter your number" style={{ borderRadius: 0, fontSize: '13px' }} className="profile_input" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' placeholder="Email" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className="mb-12" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Your Message</Form.Label>
                        <Form.Control as="textarea" placeholder='Write your Message' rows={3} style={{ borderRadius: 0, height: '150px', fontSize: '13px' }} className="profile_input" />
                    </Form.Group>
                </Row>
            </Row>


            <Row>
                <h3 className='profile-shipping'>SHIPPING ADDRESS</h3>
                <Row>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Flat/Plot</Form.Label>
                            <Form.Control type="text" placeholder="company name" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control type='text' placeholder="Address" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Zip Code*</Form.Label>
                            <Form.Control type='text' placeholder="Zip-Code" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Country</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>India</option>
                                <option value="1">UAE</option>
                                <option value="2">U.K</option>
                                <option value="3">US</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>City*</Form.Label>
                            <Form.Control type='text' placeholder="City" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Region/State*</Form.Label>
                            <Form.Control type='text' placeholder="Region/State" style={{ borderRadius: 0, fontSize: '13px' }} className='profile_input' />
                        </Form.Group>
                    </Col>

                </Row>

            </Row>


        </Form>
    );
}

export default GridBasicExample;