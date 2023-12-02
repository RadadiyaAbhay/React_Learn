import React, { useEffect, useState } from 'react'
import { Container, Form, Row, Table } from 'react-bootstrap'
import GetData, { filterData } from '../../utilities/GetData';
import { useNavigate } from 'react-router';
import {ArrowRight, PencilSquare, SortAlphaDown, SortAlphaDownAlt, SortNumericDown, SortNumericDownAlt, Trash } from 'react-bootstrap-icons';

function Read() {

  let [students, setStudents] = useState(GetData);
  let [courseData, setcourseData] = useState(filterData);
  let [sortName , setSortName] = useState(true);
  let [sortAge , setSortAge] = useState(true);
  let [inputSearch , setInputSearch] = useState('');
  let navigate = useNavigate();

  let handleDelete = (e, id) => {
    var newStudents = students.filter((stu) => {
      return id != stu.id;
    })
    setStudents(newStudents);
    localStorage.setItem('StudentsData', JSON.stringify(newStudents));
  }

  let handleEdit = (e, id) => {
    students.map((stu) => {
      if (stu.id == id) {
        navigate('/update', { state: stu });
      };
    })

  }
  let handleView = (e, id) => {
    students.map((stu) => {
      if (stu.id == id) {
        navigate('/view', { state: stu });
      };
    })

  }

  let handlefilter = (e) => {
    let value = e.target.value;
    let stuData = GetData();
    let newData = stuData.filter((s) => {
      if (value == -1) {
        return s;
      } else {
        return value == s.course.toLowerCase();
      }
    })
    setStudents(newData);
  }
  let handleSort = () =>{
    if(sortName){
      let stuData = GetData();
      let sortData = stuData.sort((stu1, stu2)=>{
        return stu2.fname.localeCompare(stu1.fname);
        // return stu2.fname.charCodeAt(0) - stu1.fname.charCodeAt(0);

      })
      setStudents(sortData);
      setSortName(false);
  
    }else{
      let stuData = GetData();
      let sortData = stuData.sort((stu1, stu2)=>{
        return stu1.fname.localeCompare(stu2.fname);
      })
      setStudents(sortData);
      setSortName(true);
  
    }

  }

  let handleSortAge = () =>{
    if(sortAge){
      let stuData = GetData();
      let sortData = stuData.sort((stu1, stu2)=>{
        return stu2.age - stu1.age;
      })
      setStudents(sortData);
      setSortAge(false);
  
    }else{
      let stuData = GetData();
      let sortData = stuData.sort((stu1, stu2)=>{
        return stu1.age - stu2.age;

      })
      setStudents(sortData);
      setSortAge(true);
  
    }

  }

  let handleSearch = (e) =>{
    setInputSearch(e.target.value);
    let getdata = GetData();

    let searchData = getdata.filter((stu)=>{
      return ((stu.fname.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) || (stu.lname.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) || (stu.grid.indexOf(e.target.value) > -1) || (stu.email.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1));
    })
    setStudents(searchData);
  }
  useEffect(() => {
    setcourseData(filterData);
  }, [students])

  return (
    <>
      <section className='py-5'>
        <Container>
          <Row>
            <div className='justify-content-between d-flex'>
            <div className='mb-2 col-3 px-0'>
              <Form.Select onChange={handlefilter}>
                <option value={-1}>-- All --</option>
                {
                  courseData.map((co, index) => {
                    return (
                      <option key={index} value={co.toLowerCase()}>{co}</option>
                    )
                  })
                }
              </Form.Select>
            </div>
            <div className='mb-2 col-3 px-0'>
              <Form>
                <Form.Control type="text" value={inputSearch} name={inputSearch} onChange={handleSearch}/>
              </Form>
            </div>
            </div>
            <Table className='table-striped'>
              <thead className='border-top'>
                <tr>
                  <th>
                    No.
                  </th>
                  <th className='cursor d-flex justify-content-between align-items-center' onClick={handleSort}>
                    Name
                    {
                      sortName ? 
                        <SortAlphaDown/>
                      :
                        <SortAlphaDownAlt/>
                    }
                    
                    
                  </th>
                  <th>
                    Contact No.
                  </th>
                  <th>
                    Parents Contact No.
                  </th>
                  <th className='cursor d-flex justify-content-between align-items-center' onClick={handleSortAge}>
                    Age
                    {
                      sortAge ? 
                        <SortNumericDown/>
                      :
                        <SortNumericDownAlt/>
                    }
                    </th>
                  <th>GRID</th>
                  <th>Course Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>

                {
                  students.map((stu, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{stu.fname}&nbsp;{stu.lname}</td>
                        <td>{stu.phone}</td>
                        <td>{stu.gphone}</td>
                        <td>{stu.age}</td>
                        <td>{stu.grid}</td>
                        <td>{stu.course}</td>
                        <td>{stu.email}</td>
                        
                        <td>
                          <a className='me-2' onClick={(e) => {
                            handleEdit(e, stu.id)
                          }}><PencilSquare className='text-dark fs-5' /></a>
                          <a onClick={(e) => {
                            handleDelete(e, stu.id)
                          }}><Trash className='text-dark fs-5' /></a>
                        </td>
                        <td>
                          <a onClick={(e) => {
                            handleView(e, stu.id)
                          }}><ArrowRight className='text-dark fs-5' /></a>

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

export default Read
