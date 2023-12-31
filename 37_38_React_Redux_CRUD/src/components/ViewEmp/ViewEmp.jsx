import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmpAction, editEmpAction, getData } from '../../services/actions/empAcion';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function ViewEmp() {
    const { employees } = useSelector(state => state.empReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) =>{
        dispatch(deleteEmpAction(id));
    }
    const handleEdit = (id) =>{
        dispatch(editEmpAction(id));
        navigate('/edit')

    }
    useEffect(()=>{
        let get = JSON.parse(localStorage.getItem('employees'))
        let data = [];
        if (get != null) {
            data = get;
        }
        dispatch(getData(data));
    },[])
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Table striped  hover responsive>
                            <thead className='border-top'>
                                <tr>
                                    <th>
                                        Sr No.
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Password
                                    </th>
                                    <th className='text-center'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((emp , index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index +1}</td>
                                            <td>{emp.fname} {emp.lname}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.password}</td>
                                            <td className='text-center'>
                                            <button type="button" className='btn me-3 p-0'onClick={()=>{
                                                handleEdit(emp.id)
                                            }}>
                                                <PencilSquare className='fs-5'/>
                                            </button>
                                            <button type="button" className='btn p-0' onClick={()=>{
                                                handleDelete(emp.id)
                                            }}>
                                                <TrashFill className='fs-5'/>
                                            </button>
                                            </td>
                                        </tr>

                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ViewEmp