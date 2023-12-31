import React, { useContext } from 'react'
import { userContext } from '../MainCom/MainCom';

function ComD() {
    const user = useContext(userContext);

    return (
        <>
            <div>I'm ComD</div>
            <p>{user.name} age is {user.age}</p>
        </>
    )
}

export default ComD