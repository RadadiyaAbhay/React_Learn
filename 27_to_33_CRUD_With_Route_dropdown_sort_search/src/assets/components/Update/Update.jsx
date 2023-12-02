import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router'
import GetData from '../../utilities/GetData';

function Update() {

    let { state } = useLocation();

    const [student, setStudent] = useState(state);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let stuData = GetData();

        let newStuData = stuData.map((s) => {
            if (s.id == student.id) {
                return s = student;
            }
            return s;
        })
        localStorage.setItem('StudentsData', JSON.stringify(newStuData));
        navigate('/')

    }
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Row className="g-2">
                                <Col md>
                                    <FloatingLabel label="First Name" className="mb-3">
                                        <Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} value={student.fname} name="fname" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>

                                    <FloatingLabel label="Last Name" className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Last Name" value={student.lname} name="lname" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="g-2">

                                <Col md>
                                    <FloatingLabel label="Contact No." className="mb-3">
                                        <Form.Control type="number" placeholder="Enter Contact No." value={student.phone} name="phone" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                                <Col md>

                                    <FloatingLabel label="Parents Contact No." className="mb-3">
                                        <Form.Control type="number" placeholder="Enter Parents Contact No." value={student.gphone} name="gphone" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="g-2">

                                <Col md>

                                    <FloatingLabel label="GRID" className="mb-3">
                                        <Form.Control type="number" placeholder="Enter GRID" value={student.grid} name="grid" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel label="Course Name" className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Course Name" value={student.course} name="course" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel label="Email" className="mb-3">
                                        <Form.Control type="email" placeholder="Enter Email" value={student.email} name="email" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="g-2">

                                <Col md>

                                    <FloatingLabel label="Academic Year" className="mb-3">
                                        <Form.Control type="number" placeholder="Enter Year" value={student.academicYear} name="academicYear" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel className="mb-3" label="Gender">
                                        <Form.Select value={student.gender} name="gender" onChange={handleChange}>
                                            <option>Open this select menu</option>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                            <option value="unspecified">unspecified</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel label="Age" className="mb-3">
                                        <Form.Control type="number" placeholder="Enter age" value={student.age} name="age" onChange={handleChange} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Button variant='dark' type='submit'>Update</Button>
                        </Form>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Update
