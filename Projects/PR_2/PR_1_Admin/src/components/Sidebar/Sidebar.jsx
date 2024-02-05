import React, { useState } from 'react'
import { CaretRightFill} from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';
import { FaChartPie ,FaShoppingCart ,FaSitemap } from "react-icons/fa";
import { BsTelephoneFill  } from "react-icons/bs";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { MdOutlineSocialDistance } from "react-icons/md";


function Sidebar() {
  const menu = [{
    listname: 'Home',
    listicon: <FaChartPie className="me-2 fs-18 " />,
    listarr: [{ sublistname: 'Ecommerce',to :'/dashboard', sublistarr: [] },
    { sublistname: 'CRM',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Reports',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Social Feed',to :'/dashboard', sublistarr: [] }]
  },
  {
    listname: 'Ecommerce',
    listicon: <FaShoppingCart className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Admin', sublistarr: [{ linkname: 'Add Product', linkpath: '/createproduct' }, { linkname: 'Products', linkpath: '/products' }] },
    { sublistname: 'User', sublistarr: [{ linkname: 'Users', linkpath: '/users' }, { linkname: 'Subscribe', linkpath: '/users' }] },
    { sublistname: 'Order', sublistarr: [{ linkname: 'Orders', linkpath: '/dashboard' }, { linkname: 'Orders details', linkpath: '/dashboard' }, { linkname: 'Refund', linkpath: '/dashboard' }] }]
  },
  {
    listname: 'CRM',
    listicon: <BsTelephoneFill className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'Analytics',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Deals',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Deal Details',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Leads',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Lead Details',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Reports',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Report Details',to:'/dashboard', sublistarr: [] },
    { sublistname: 'Add Contact',to:'/dashboard', sublistarr: [] }]
  },
  {
    listname: 'Reports',
    listicon: <FaSquarePollHorizontal className="me-2 fs-18 " />,
    listarr: [{ sublistname: 'Revenue',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Return',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Profit',to :'/dashboard', sublistarr: [] }]
  },
  {
    listname: 'Social Feed',
    listicon: <MdOutlineSocialDistance className="me-2 fs-18 " />,
    listarr: [{ sublistname: 'Instagram',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Facebook',to :'/dashboard', sublistarr: [] },
    { sublistname: 'Tiktok',to :'/dashboard', sublistarr: [] }]
  },
  {
    listname: 'Site Management',
    listicon: <FaSitemap className="me-2 fs-18 fw-bold" />,
    listarr: [{ sublistname: 'HomePage',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Product Detail',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Cart',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Checkout',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Profile',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Order Tracking',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
    { sublistname: 'Invoice',to:'/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] }]
  }]
  let nextid = ' ';
  const handleDrop = (i) => {
    const showDrop = document.getElementById(`showDrop${i}`);
    const rot = document.getElementById(`rot${i}`);
    const oldid = nextid
    if (nextid == ' ') {
      showDrop.classList.remove('d-none')
      rot.classList.remove('rot1')
      rot.classList.add('rot2')
      nextid = i
    } else if (nextid == i) {
      showDrop.classList.add('d-none')
      rot.classList.add('rot1')
      rot.classList.remove('rot2')
      nextid = ' '
    } else if (nextid != i) {
      showDrop.classList.remove('d-none')
      rot.classList.remove('rot1')
      rot.classList.add('rot2')
      nextid = i
    }

    if (oldid != ' ' && oldid != i) {
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

                        {
                          b.sublistarr.length != 0 ? (<li className='text-white ps-4 ms-2 pt-1 d-flex align-items-center point' onClick={() => { handleDrop(i + '' + k) }}><CaretRightFill className='fs-12 fw-bold me-2' id={'rot' + i + k} />{b.sublistname}</li>) : (<li className='text-white ps-4 ms-2 pt-1 d-flex align-items-center point'><NavLink to={b.to} className='text-white text-decoration-none'>{b.sublistname}</NavLink> </li>)
                        }

                        <ul className='list-unstyled pt-1 d-none' id={'showDrop' + i + k}>
                          {
                            b.sublistarr.map((c, m) => {
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