import React, { createContext } from 'react'
import ComA from '../ComA/ComA'

export const userContext = createContext()
function MainCom() {
    const user = {name: 'Abhay Radadiya' , age : '18'};
    return (
        <>
        <h2 className='fw-bold mb-3 text-center mt-2'>UseContext</h2>
            <div>MainCom</div>
            <userContext.Provider value={user}>
                <ComA/>
            </userContext.Provider>
        </>
    )
}

export default MainCom