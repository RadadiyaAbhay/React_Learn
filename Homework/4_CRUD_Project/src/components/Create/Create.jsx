import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import getdata from '../../utilities/getdata';
import { useNavigate } from 'react-router';



function Create() {

    let [student, setStudent] = useState({
        fname: '',
        lname: '',
        phone: '',
        gphone: '',
        grid: '',
        course: '',
        email: ''
    });
    
    let [students, setStudents] = useState(getdata);
    let [isSubmit , setIsSubmit]  = useState(false);

    let navigate = useNavigate();
    

    let handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
            let id = Math.floor(Math.random()*1000);
            let newStudent = {...student , id : id}
            setStudents([...students, newStudent]);
        setStudent({
            fname: '',
            lname: '',
            phone: '',
            gphone: '',
            grid: '',
            course: '',
            email: ''
        })
        setIsSubmit(true)
    }


    useEffect(() => {
        localStorage.setItem('studentDetails', JSON.stringify(students))
        if(isSubmit){
            navigate('/view')
        }
    }, [students])


    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} value={student.fname} name="fname" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={student.lname} name="lname" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Contact No.</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Contact No." value={student.phone} name="phone" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Parents Contact No.</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Parents Contact No." value={student.gphone} name="gphone" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>GRID</Form.Label>
                                    <Form.Control type="number" placeholder="Enter GRID" value={student.grid} name="grid" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Course Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Course Name" value={student.course} name="course" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" value={student.email} name="email" onChange={handleChange} />
                                </Form.Group>
                            </Row>


                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>

                        </Form>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Create;
