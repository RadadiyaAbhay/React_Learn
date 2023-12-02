import { useState } from "react";

function Counter({ am }) {


    const [count, setCount] = useState(0);
    var kk = count * am;
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
                <button onClick={handleDec}>
                    -
                </button>
                <span style={{ padding: '0px 20px' }}>
                    {
                        count
                    }
                </span>
                <button onClick={handleInc}>
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
            </div>
        </>
    )
}

export default Counter;