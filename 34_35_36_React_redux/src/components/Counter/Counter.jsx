import React from 'react'
import { desCounter, incCounter } from '../../services/actions/counter.action'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {

    const dispatch = useDispatch();
    const {count} = useSelector(state => state .counterReducer);

    const handleDsc = () =>{
        dispatch(desCounter());
    }
    const handleInc = () =>{
        
        dispatch(incCounter());

    }
    return (
        <>
            <h2>Counter</h2>
            <div style={{display:'flex'}}>
                <button type="button" onClick={handleDsc}>-</button>
                <p style={{padding:'0 20px'}}>
                    {count}
                </p>
                <button type="button" onClick={handleInc}>+</button>
            </div>
        </>
    )
}

export default Counter
