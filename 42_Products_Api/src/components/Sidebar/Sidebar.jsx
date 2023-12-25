import React, { useState } from 'react'
import { Bezier, BookHalf, Box2Fill, Calendar2CheckFill, CartFill, ChevronDown, Diagram2Fill, Grid1x2Fill, HouseFill, InboxFill, LayoutSidebar, ListNested, PeopleFill, Percent, PersonFill, Table, TagsFill, Wechat, XDiamondFill } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const [dropdown, setDropdown] = useState({
    d1: false,
    d2: false,
    d3: false
  })
  const handleDropdown = (d) => {
    if (!dropdown[d]){
      setDropdown({...dropdown, [d]: true });
    }else{
      setDropdown({...dropdown, [d]: false });
    }
  }

  return (
    <>
      <div className="col-12">
        <h3 className='position-sticky top-0 w-100 shadow-sm py-3 ps-4 h-10 bg-black bg-gradient'>
          <NavLink className='text-warning fw-bold text-decoration-none' to={"/"}>I...Admin</NavLink>
        </h3>
        <nav>
          <ul className='list-unstyled'>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><HouseFill className='me-3 text-secondary' />Home</NavLink></li>
            <li className='pt-2 px-4 align-items-center d-flex justify-content-between'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/showproducts"}><CartFill className='me-3 text-secondary' />Products</NavLink><a onClick={(() => {
              handleDropdown('d1')
            })}><ChevronDown/></a></li>
            <ul style={{listStyle : 'none'}} className={dropdown.d1 ? 'show' : 'hide'}>
              <li className='ms-4 pt-1'><NavLink className=' ps-2 text-black fs-6 fw-medium text-decoration-none d-flex align-items-center' to={"/createproduct"}>create product</NavLink></li>
            </ul>

            <li className='pt-2 px-4 align-items-center d-flex justify-content-between'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/showadmins"}><PersonFill className='me-3 text-secondary' />Admins</NavLink><a onClick={(() => {
              handleDropdown('d2')
            })}><ChevronDown/></a></li>
            <ul style={{listStyle : 'none'}} className={dropdown.d2 ? 'show' : 'hide'}>
              <li className='pt-1 ms-4'><NavLink className='ps-2 text-black fs-6 fw-medium text-decoration-none' to={"/createadmin"}>create admin</NavLink></li>
            </ul>

            <li className='pt-2 px-4 align-items-center d-flex justify-content-between' ><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/showusers"}><PeopleFill className='me-3 text-secondary' />Users</NavLink><a onClick={(() => {
              handleDropdown('d3')
            })}><ChevronDown /></a></li>
            <ul style={{listStyle : 'none'}} className={dropdown.d3 ? 'show' : 'hide'}>
              <li className='pt-1 ms-4'><NavLink className='ps-2 text-black fs-6 fw-medium text-decoration-none d-flex align-items-center' to={"/createuser"}>create user</NavLink></li>
            </ul>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><InboxFill className='me-3 text-secondary' />Email</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Wechat className='me-3 text-secondary' />Social</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Calendar2CheckFill className='me-3 text-secondary' />Calender</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Bezier className='me-3 text-secondary' />CRM</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><BookHalf className='me-3 text-secondary' />Pages</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><TagsFill className='me-3 text-secondary' />Pricing</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Table className='me-3 text-secondary' />Tables</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><ListNested className='me-3 text-secondary' />Multi Level</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><LayoutSidebar className='me-3 text-secondary' />Layout</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Diagram2Fill className='me-3 text-secondary' />Echarts</NavLink></li>
            <li className='pt-2 ps-4'><NavLink className='text-black fs-6 fw-semibold text-decoration-none d-flex align-items-center' to={"/"}><Percent className='me-3 text-secondary' />Discount</NavLink></li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar