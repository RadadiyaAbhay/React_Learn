import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Getdata from '../../utilities/Getdata';
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

function Admin() {
  const [products, setProducts] = useState(Getdata);
  const navigate = useNavigate();

  const handleEdit = (e , id) =>{
    let newProduct = products.filter((product)=>{
      return product.id == id;
    })
    navigate('/update', {state : newProduct[0]})
  }

  const handleDelete = (e , id) =>{
    let newProducts = products.filter((product)=>{
      return product.id != id;
    })
    setProducts(newProducts);
  }

  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products));
  },[products])

  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
            <table className="table table-striped">
              <thead>
                <tr className='border-top'>
                  <th>Sr no.</th>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Brand</th>
                  <th>Colour</th>
                  <th>Category</th>
                  <th>Offers</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product ,index) => {
                    return(
                    <tr key={product.id}>
                      <td className='col-1'>{index+1}</td>
                      <td className='col-1'><img src={product.thumbnail} className='col-12'/></td>
                      <td className='col-3'>{product.name}</td>
                      <td className='col-1'>{product.price}</td>
                      <td className='col-1'>{product.discount}</td>
                      <td className='col-1'>{product.brand}</td>
                      <td className='col-1'>{product.colour}</td>
                      <td className='col-1'>{product.category}</td>
                      <td className='col-1'>{product.offers}</td>
                      <td className='col-1'>
                        <a className='px-2 fs-6 fw-bold text-black' onClick={(e) => {
                          handleEdit(e , product.id)
                        }}><PencilFill/></a>
                        <a className='px-2 fs-6 fw-bold text-black' onClick={(e) => {
                          handleDelete(e , product.id)
                        }}><Trash3Fill/></a>
                      </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Admin
