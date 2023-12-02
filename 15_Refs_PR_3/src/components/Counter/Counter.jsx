import { useState } from "react";
import Button from '../Button/Button';


function Counter({ am }) {
    // console.log(am[0]);

    const [count, setCount] = useState(0);
    var kk = count * am[0];
    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        if (count > 0) {

            setCount(count - 1);
        }
    }
    return (
        <>
        <div>
            <div style={{paddingBottom: '10px'}}>
                <button onClick={handleDec} className="decButt">
                    -
                </button>
                <span style={{ padding: '9px 20px' }} className="spp">
                    {
                        count
                    }
                </span>
                <button onClick={handleInc} className="incButt">
                    +
                </button>
            </div>
            <div className="borde">
                <h6 className="d-inline">
                    Total Amount :
                </h6>
                <span>
                    {kk}
                </span>
            </div>
        <Button numb={am[1]}/>                                                    
        </div>
        </>
    )
}

export default Counter;