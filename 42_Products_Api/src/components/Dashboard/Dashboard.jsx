import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const { products } = useSelector(state => state.productsReducer)
  const { admins } = useSelector(state => state.adminsReducer)
  const { users } = useSelector(state => state.usersReducer)
  const [dash, setDash] = useState([])
  useEffect(()=>{
      setDash([{
        title: 'Products',
        length: products.length,
        navigate: '/showproducts',
        create: '/createproduct'
      },
      {
        title: 'Admins',
        length: admins.length,
        navigate: '/showadmins',
        create: '/createadmin'
    
      },
      {
        title: 'Users',
        length: users.length,
        navigate: '/showusers',
        create: '/createuser'
    
      }])
  },[products,admins, users])

  return (
    <>
      <Container className='pt-5 px-4'>
        <Row>
          <h2 className='pb-2 text-center'>Dashboard</h2>
          {dash.map((ca) => {
            return (

              <div className='col-6 px-2' key={ca.title}>
                <Card className='mb-3 bg-light col-12' >
                  <Card.Body>
                    <Card.Title className='fs-4 fw-bold'>{ca.title}</Card.Title>
                    <Card.Subtitle className="mb-4 mt-2 text-muted">Total {ca.title} : {ca.length}</Card.Subtitle>
                    <NavLink to={ca.navigate} className=' text-decoration-none fw-semibold btn btn-warning'>Go {ca.title}</NavLink>
                    <NavLink to={ca.create} className='ms-2 text-decoration-none fw-semibold btn btn-warning'>Create {ca.title}</NavLink>
                  </Card.Body>
                </Card>
              </div>

            )
          })}

        </Row>
      </Container>
    </>
  )
}

export default Dashboard