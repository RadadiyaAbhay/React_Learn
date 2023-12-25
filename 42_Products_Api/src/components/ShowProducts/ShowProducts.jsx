import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import {PencilSquare, Trash } from 'react-bootstrap-icons';
import { Container, Row } from 'react-bootstrap';
import { deleteProducts, editProducts, showProducts } from '../../services/actions/products.action';
import { useNavigate } from 'react-router';

function ShowProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showProducts());
  },[])

  const { products , isLoading ,err} = useSelector(state => state.productsReducer);
  const handleEdit = (id) =>{
    dispatch(editProducts(id))
    setTimeout(() => {
      navigate("/editproduct")
    }, 100);
  }


  const handleDelete = (id) =>{
    dispatch(deleteProducts(id))
  }

  if(isLoading){
    return(
      <>
      <Container>
        <Row style={{height:"90vh"}}>
          <div className='justify-content-center d-flex align-items-center'>
            <div className="loader"></div>
          </div>
        </Row>
      </Container>
      </>
    )
  }else if(err != null){
    return(
      <>
      <Container>
        <Row>
          <p className='pt-5 fw-bold'>Server Not Found</p>
        </Row>
      </Container>
      </>
    )
  }else if(products.length == 0){
    return(
      <>
      <Container>
        <Row>
          <p className='pt-5 fw-bold'>No Products here</p>
        </Row>
      </Container>
      </>
    )

  }else{
    return (
      <>
      <Container className='pt-5 font2'>
        <Row>
        <h2 className='pb-2 font1 text-center'>Products</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td className="col-1"><img src={product.image} alt="" className="img-thumbnail"/></td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><button className='btn' onClick={() => {
                      handleEdit(product.id)
                    }}><PencilSquare className='fs-5'/></button>
                    <button className='btn' onClick={() => {
                      handleDelete(product.id)
                    }}><Trash className='fs-5'/></button>
                    </td>
                  </tr>
                )
              })
            }
  
          </tbody>
        </Table>
        </Row>
      </Container>

      </>
    )    

  }
}

export default ShowProducts