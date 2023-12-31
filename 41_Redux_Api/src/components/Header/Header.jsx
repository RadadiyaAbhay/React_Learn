import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { albumAction } from '../../services/actions/albumAction';

function Header() {
  const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(albumAction())
    }
  return (
    <>
        <Button variant="dark" onClick={handleClick}>Print</Button>
    </>
  )
}

export default Header