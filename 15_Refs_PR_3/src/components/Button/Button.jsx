import {React , useRef } from "react";

function Button({numb}) {


    const myRef = useRef();



    const handelClick = ()=>{

        myRef.current.style.backgroundColor = "rgb(165, 42, 42)";
        myRef.current.style.borderColor = "black";
        myRef.current.style.color = "white";
        myRef.current.style.boxShadow = "1px 1px 10px brown";

    }
    return(
        <>
            <button type="submit" className="buu" id={numb} onClick={handelClick} ref={myRef}>View More</button>
        </>
    )
}

export default Button;