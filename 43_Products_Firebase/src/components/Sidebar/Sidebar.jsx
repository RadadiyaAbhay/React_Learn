import React, { useState } from 'react'
import { CaretRightFill, Cart3, Telephone } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menu = [{
    listname: 'Ecommerce',
    listicon: <Cart3 className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Product', sublistarr: [{linkname:'Add Product', linkpath :'/createproduct'}, {linkname:'Products', linkpath :'/'}] },
    { sublistname: 'Admin', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'User', sublistarr: [{linkname:'Add User', linkpath :'/'}, {linkname:'Users', linkpath :'/'}] }]
  },
  {
    listname: 'CRM',
    listicon: <Telephone className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Analytics', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deals', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deal Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Leads', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Lead Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Reports', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Report Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Add Contact', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] }]
  },
  {
    listname: 'CRM',
    listicon: <Telephone className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Analytics', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deals', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deal Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Leads', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Lead Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Reports', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Report Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Add Contact', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] }]
  },
  {
    listname: 'CRM',
    listicon: <Telephone className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Analytics', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deals', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deal Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Leads', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Lead Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Reports', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Report Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Add Contact', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] }]
  },
  {
    listname: 'CRM',
    listicon: <Telephone className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Analytics', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deals', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Deal Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Leads', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Lead Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Reports', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Report Details', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] },
    { sublistname: 'Add Contact', sublistarr: [{linkname:'Add Admin', linkpath :'/'}, {linkname:'Admins', linkpath :'/'}] }]
  }]
  let nextid = ' ';
  const handleDrop = (i) => {
    const showDrop = document.getElementById(`showDrop${i}`);
    const rot = document.getElementById(`rot${i}`);
    const oldid = nextid
    if(nextid == ' '){
      showDrop.classList.remove('d-none')
      rot.classList.remove('rot1')
      rot.classList.add('rot2')
      nextid = i
    }else if(nextid == i){
      showDrop.classList.add('d-none')
      rot.classList.add('rot1')
      rot.classList.remove('rot2')
      nextid = ' '
    }else if(nextid != i){
      showDrop.classList.remove('d-none')
      rot.classList.remove('rot1')
      rot.classList.add('rot2')
      nextid = i
    }
    
    if(oldid != ' ' && oldid != i){
      const showDrop = document.getElementById(`showDrop${oldid}`);
      const rot = document.getElementById(`rot${oldid}`);
      showDrop.classList.add('d-none')
      rot.classList.add('rot1')
      rot.classList.remove('rot2')
    }

  }
  return (
    <>
      <div className="col-12 bg-dark z-0 h-100 overflow-auto scroll-line font1 ps-4 border-end border-secondary border-2">
        <ul className='list-unstyled'>
          {menu.map((a, i) => {
            return (
              <div key={i} className='pt-4'>
                <li className='text-white d-flex align-items-center'>{a.listicon} {a.listname}</li>
                {
                  a.listarr.map((b, k) => {
                    return (
                        <ul className='list-unstyled pt-1' key={k}>
                          <li className='text-white ps-4 ms-2 pt-1 d-flex align-items-center point' onClick={()=>{handleDrop(i+''+k)}}><CaretRightFill className='fs-12 fw-bold me-2' id={'rot'+i+k}/>{b.sublistname}</li>
                          <ul className='list-unstyled pt-1 d-none' id={'showDrop'+i+k}>
                            {
                              b.sublistarr.map((c ,m)=>{
                                return (
                                  <li className='text-white ps-5 ms-3 pt-1 d-flex align-items-center' key={m}><NavLink to={c.linkpath} className='text-white text-decoration-none'>{c.linkname}</NavLink></li>
                                )
                              })
                            }
                          </ul>
                        </ul>
                    )
                  })
                }
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar