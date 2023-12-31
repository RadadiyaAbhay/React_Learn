import React, { useContext } from 'react'
import ComD from '../ComD/ComD'
import { userContext } from '../MainCom/MainCom'

function ComC() {
    const user = useContext(userContext);
    console.log(user);
    return (
        <>
            <div>I'm ComC</div>
            <p className='m-0'>Hi , {user.name}</p>
            <ComD />
        </>
    )
}

export default ComC