import './Controlled.css';
import { useState } from "react";


const Controlled = () =>{

    const [name ,setName] = useState('');
    const [na ,setNa] = useState('');

    const handleName =(n) =>{
        console.log(n.target.value);
        setName(n.target.value);
    }

    const handleClick =(e) =>{
        e.preventDefault();
        console.log("hi");
        setNa(name);
        setName('');
    }

    return(
        <>
        <h1>Controlled Components</h1>
        <form onSubmit={handleClick}>
            <label htmlFor="name" ></label>
            <input type="text" name="name" value={name} onChange={handleName}/>
            <button type="submit">Submit</button>
        </form>
        <h3>{na}</h3>
        </>
    )
}
export default Controlled;