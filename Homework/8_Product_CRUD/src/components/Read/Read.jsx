import React, { useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import Getdata from '../../utilities/Getdata';
import { useNavigate } from 'react-router';


function Read() {

  const [products, setProducts] = useState(Getdata);
  const [serchInput, setSerchInput] = useState('');
  let navigate = useNavigate();

  const handleView = (id) => {
    let newProduct = products.filter((product) => {
      return product.id == id;
    })
    navigate('/view', { state: newProduct[0] });
  }

  const handleInput = (e) => {
    setSerchInput(e.target.value);
    let getdata = Getdata();
    let newProduct = getdata.filter((product) => {
      return ((product.name.toLowerCase().indexOf(serchInput.toLowerCase()) > -1) || (product.offers.toLowerCase().indexOf(serchInput.toLowerCase()) > -1) || (product.description.toLowerCase().indexOf(serchInput.toLowerCase()) > -1) || (product.brand.toLowerCase().indexOf(serchInput.toLowerCase()) > -1) || (product.category.toLowerCase().indexOf(serchInput.toLowerCase()) > -1));
    })
    setProducts(newProduct);
  }
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
            <div className='d-flex justify-content-end'>
              <form>
                <input type="text" value={serchInput} onChange={handleInput} placeholder='Search Now...'/>
              </form>
            </div>
            {
              products.map((product) => {
                return (
                  <div className='p-2 col-12' key={product.id}>
                    <Card className='col-12'>
                      <div className='d-flex'>
                        <div className='col-2 p-3'>
                          <Card.Img variant="top" src={product.thumbnail} className='col-12' />
                        </div>
                        <div className='col-10'>
                          <Card.Body className='col-12'>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                              <span className='mb-1 fs-5 pe-3 fw-bold'>
                                Rs. {product.price - ((product.price * product.discount) / 100)}
                              </span>
                              <span className='mb-0 text-decoration-line-through'>Rs. {product.price}</span>
                            </Card.Text>
                            <Button variant="dark" onClick={() => {
                              handleView(product.id)
                            }}>View More</Button>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Read
