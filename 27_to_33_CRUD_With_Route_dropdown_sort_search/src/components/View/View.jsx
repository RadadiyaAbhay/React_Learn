import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';
import "./View.css";
import { PenFill, PencilSquare } from 'react-bootstrap-icons';

function View() {

    let { state } = useLocation();
    let navigate = useNavigate();
    let [student, setStudent] = useState(state);
    let handleEdit = (e, id) => {
        navigate('/update', { state: state }); 
      }

    return (
        <>
            <section>
                <Container>
                    <Row>

                        <div className="student-profile py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent text-center">
                                                <img className="profile_img" src="https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg" alt="" />
                                                <h3>{student.fname}&nbsp;{student.lname}</h3>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0"><strong className="pr-1">GR ID :</strong> {student.grid}</p>
                                                <p className="mb-0"><strong className="pr-1">Course :</strong> {student.course}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card shadow-sm">
                                            <div className="card-header bg-transparent border-0">
                                                <h3 className="mb-0 pt-2 d-flex justify-content-between"><span>General Information</span><a className='me-2' onClick={(e) => {
                                                    handleEdit(e, student.id)
                                                }}><PencilSquare className='text-dark fs-5' /></a></h3>
                                            </div>
                                            <div className="card-body pt-3">
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th width="30%">Academic Year	</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.academicYear}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Gender</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.gender}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Age</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.age}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Email</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Conatct No.</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Parents Contact No.</th>
                                                            <td width="2%">:</td>
                                                            <td>{student.gphone}</td>
                                                        </tr>

                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default View
