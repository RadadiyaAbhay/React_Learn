import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'

function Payment() {

  const [payment, setPayment] = useState({
    date: '',
    pName: '',
    amount: '',
    billNo: ''
  })
  const [allPayment, setAllPayment] = useState([]);
  const [total, setTotal] = useState('0');

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllPayment([...allPayment, payment]);
    setTotal(total + payment.amount);
    setPayment({
      date: '',
      pName: '',
      amount: '',
      billNo: ''
    })
  }

  useEffect(() => {
    console.log(total);
    localStorage.setItem('payment', JSON.stringify(allPayment));
  }, [allPayment])
  return (
    <>
      <section className='py-5'>
        <Container>
          <Row>

            <Form onSubmit={handleSubmit}>
              <div>
                <label>Bill No. : </label>
                <input type='number' name='billNo' onChange={handleChange} value={payment.billNo} className='ms-2' /><br /><br />
                <label>Date : </label>
                <input type='date' name='date' onChange={handleChange} value={payment.date} className='ms-2'/><br /><br />
                <label>party Name : </label>
                <input type='text' name='pName' onChange={handleChange} value={payment.pName} className='ms-2'/><br /><br />
                <label>Amount : </label>
                <input type='number' name='amount' onChange={handleChange} value={payment.amount} className='ms-2'/><br /><br />
                <input type="submit" />
              </div>
            </Form>
          </Row>
        </Container>
      </section>
      <section className='py-5'>
        <Container>
          <Row>

            <table className='table'>
              <thead>
                <tr className='border-top'>
                  <th>
                    No.
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Party Name
                  </th>
                  <th>
                    Bill No.
                  </th>
                  <th>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  allPayment.map((a, index) => {

                    return (
                      <tr key={index}>
                        <th>
                          {index + 1}
                        </th>
                        <td>
                          {a.date}
                        </td>
                        <td>
                          {
                            a.pName
                          }
                        </td>
                        <td>
                          {
                            a.billNo
                          }
                        </td>
                        <td>
                          {
                            a.amount
                          }
                        </td>
                      </tr>
                    )
                  })
                }
                <tr>
                  <th colSpan={4} >Total :</th>
                  <th>
                    {total}
                  </th>
                </tr>
              </tbody>
            </table>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Payment
