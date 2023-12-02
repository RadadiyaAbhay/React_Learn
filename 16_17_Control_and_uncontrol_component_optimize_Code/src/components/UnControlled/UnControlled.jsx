import { useRef ,useState } from "react";


const UnControlled = () =>{

    const [name ,setName] = useState('');
    const myRef = useRef();

    const handleClick =() =>{

        console.log("hi" ,myRef.current.value);
        setName(myRef.current.value);

    }

    return(
        <>
        <h1>UnControlled Components</h1>
        <form>
            <label htmlFor="name"></label>
            <input type="text" name="name" ref={myRef}/>
            <button type="button" onClick={handleClick}>Submit</button>
        </form>
        <h3>{name}</h3>
        </>
    )
}
export default UnControlled;