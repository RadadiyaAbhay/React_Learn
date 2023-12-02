import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import getdata from '../../utilities/getdata';



function CRUD() {

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
    let [isEdit , setIsEdit]  = useState(false);
    let [isIndex , setIsIndex] = useState(null);
    

    let handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    let handleSubmit = (e) => {
        e.preventDefault();


        if(!isEdit){
            let id = Math.floor(Math.random()*1000);
            let newStudent = {...student , id : id}
            setStudents([...students, newStudent]);
            
        }else{
            console.log('edit');
            let stu = getdata();
            stu[isIndex] = student;
            setStudents(stu);
            setIsEdit(false);
            setIsIndex(null);
        }

        setStudent({
            fname: '',
            lname: '',
            phone: '',
            gphone: '',
            grid: '',
            course: '',
            email: ''
        })
    }

    let handleEdit = (id ,index) =>{
        let getData = getdata();
        let singleStudent = getData.filter((data)=>{
                                return data.id == id;
                            })
        
        setStudent(singleStudent[0]);
        setIsEdit(true);
        setIsIndex(index);
    }

    let handledelete = (id) =>{  
        let newStudents =   students.filter((data)=>{
                                return data.id != id;
                            })
        setStudents(newStudents);
    }

    useEffect(() => {
        localStorage.setItem('studentDetails', JSON.stringify(students))
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

                                {
                                    isEdit 
                                ?
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                                :
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                }

                        </Form>
                    </Row>
                </Container>
            </section>
            <section>
            <Container>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Contact No.
                                </th>
                                <th>
                                    Parents Contact No.
                                </th>
                                <th>
                                    GRID
                                </th>
                                <th>
                                    Course
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((d, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {d.fname}
                                            </td>
                                            <td>
                                                {d.lname}
                                            </td>
                                            <td>
                                                {d.phone}
                                            </td>
                                            <td>
                                                {d.gphone}
                                            </td>
                                            <td>
                                                {d.grid}
                                            </td>
                                            <td>
                                                {d.course}
                                            </td>
                                            <td>
                                                {d.email}
                                            </td>
                                            <td>
                                                <Button className='me-2' variant='primary' onClick={()=>{
                                                    handleEdit(d.id ,index)
                                                }}>Edit</Button>
                                                <Button variant='primary' onClick={()=>{
                                                    handledelete(d.id)
                                                }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Row>
            </Container>
            </section>

        </>
    )
}

export default CRUD;
