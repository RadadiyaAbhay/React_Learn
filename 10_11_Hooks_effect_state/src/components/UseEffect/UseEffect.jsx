import { useState , useEffect } from "react";

function UseEffect() {
    const [name, setName] = useState("Abhay");
    const [count, setCount] = useState(0);


    setTimeout(()=>{
        setName("Kumar")
        setCount(count+1)
    },1000)

    useEffect(()=>{
        console.log("useEffect as working",count);
    },[name])

    return(
        
            <>
                <h1>{name}</h1> 
                <h1>{count}</h1> 
            </>
        
    )
}
export default UseEffect;