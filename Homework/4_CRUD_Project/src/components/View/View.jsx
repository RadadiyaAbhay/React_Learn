import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import getdata from '../../utilities/getdata'
import { useNavigate } from 'react-router';

function View() {
    const [students , setStudents] = useState(getdata);
    const navigate = useNavigate();

    let handledelete = (id) =>{  
        let newStudents =   students.filter((data)=>{
                                return data.id != id;
                            })
        setStudents(newStudents);
    }

    let handleEdit = (id) =>{
        let getData = getdata();
        let studata = getData.filter((stu)=>{
            return stu.id == id;
        }) 
        
        navigate('/edit',{ state :studata[0]})

    }
    useEffect(() => {
        localStorage.setItem('studentDetails', JSON.stringify(students))
    }, [students])
    
  return (
    <section className='py-5'>
    <Container>
        <Row>
            <Table className='table-striped'>
                <thead>
                    <tr className='border-top'>
                        <th>
                            No.
                        </th>
                        <th>
                            Name
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
                                    &nbsp;
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
                                        <Button className='me-2' variant="dark" onClick={()=>{
                                            handleEdit(d.id)
                                        }}>Edit</Button>
                                        <Button variant="dark" onClick={()=>{
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
  )
}

export default View;
