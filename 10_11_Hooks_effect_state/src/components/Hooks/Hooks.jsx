import { useState } from "react";

function Hooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Abhay");

    setTimeout(()=>{
        setCount(count+1);
        setName("Vaibhav");
    },1000)

    return(
        
            <>
                <h1>{name}</h1>
                <h4>{count}</h4>
            </>
        
    )
}
export default Hooks;