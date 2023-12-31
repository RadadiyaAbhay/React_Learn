import React, { useReducer } from 'react'

function Counter() {


    const reducer = (state, action) => {
        switch (action.type) {
            case "INC":
                return {
                    count: state.count + 1
                }
            case "DSC":
                if (state.count > 0) {

                    return {

                        count: state.count - 1
                    }
                } else {
                    return state;
                }

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0 })


    return (
        <>
            <h2 className='fw-bold mb-3 text-center mt-5'>Counter With UseReducer</h2>
            <div className='d-flex justify-content-center'>
                <div className='d-flex border rounded-3 border-2 border-danger'>
                    <button className='btn btn-dark' onClick={() => { dispatch({ type: "INC" }) }}>INC</button>
                    <p className='m-0 px-3 py-2 fw-bold'>{state.count}</p>
                    <button className='btn btn-dark' onClick={() => { dispatch({ type: "DSC" }) }}>DSC</button>
                </div>
            </div>
        </>
    )
}

export default Counter