import { useState } from 'react';
import './Counter.css'
import { useEffect } from 'react';
function Counter() {

    var [countS, setCountS] = useState(0);
    var [countM, setCountM] = useState(0);
    var [countH, setCountH] = useState(0);

    

        
        setTimeout(() => {
            setCountS(countS + 1);
            if (countS == 60) {
                setCountS(0);
                setCountM(countM + 1)
    
            }
            if (countM == 60) {
                setCountM(0);
                setCountH(countH + 1)
    
            }
        }, 1000)

    
    if (countH < 10) {
        var countHr = `0${countH}`
    } else {
        var countHr = countH;
    }
    if (countM < 10) {
        var countMin = `0${countM}`
    } else {
        var countMin = countM;
    }
    if (countS < 10) {
        var countSec = `0${countS}`
    } else {
        var countSec = countS;
    }

    useEffect(()=>{
        console.log("Change Hour");
    },[countH])
    useEffect(()=>{
        console.log("Change Min");
    },[countM])
    useEffect(()=>{
        console.log("Change Sec");
    },[countS])

    return (
        <>
            <div className='divv'>
                <div className='di'>
                    <h1>
                        {countHr}<span>hr</span> : {countMin}<span>min</span> : {countSec}<span>sec</span>
                    </h1>
                </div>
            </div>

        </>
    )
}
export default Counter;