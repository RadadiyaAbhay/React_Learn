import './Form.css';
import { useState } from "react";


const Form = () =>{

    const [name ,setName] = useState('');
    const [na ,setNa] = useState('');
    const [email ,setEmail] = useState('');
    const [em ,setEm] = useState('');
    const [age ,setAge] = useState('');
    const [ag ,setag] = useState('');
    const [monumber ,setMonumber] = useState('');
    const [mo ,setMo] = useState('');

    const handleName =(n) =>{
        console.log(n.target.value);
        setName(n.target.value);
    }
    const handleEmail =(n) =>{
        console.log(n.target.value);
        setEmail(n.target.value);
    }
    const handleAge =(n) =>{
        console.log(n.target.value);
        setAge(n.target.value);
    }
    const handlemoNumber =(n) =>{
        console.log(n.target.value);
        setMonumber(n.target.value);
    }

    const handleClick =(e) =>{
        e.preventDefault();
        console.log("hi");
        setNa(name);
        setName('');
        setEm(email);
        setEmail('');
        setag(age);
        setAge('');
        setMo(monumber);
        setMonumber('');
    }

    return(
        <>
        <h1>User Details</h1>
        <form onSubmit={handleClick}>
            <label htmlFor="name" >Name :</label>
            <input type="text" name="name" value={name} onChange={handleName}/>
            <label htmlFor="email" >Email :</label>
            <input type="email" name="email" value={email} onChange={handleEmail}/>
            <label htmlFor="age" >Age :</label>
            <input type="number" name="age" value={age} onChange={handleAge}/>
            <label htmlFor="moNumber" >Contact Number :</label>
            <input type="number" name="moNumber" value={monumber} onChange={handlemoNumber}/><br/><br/>
            <button type="submit">Submit</button>
        </form>
        <h3>{na}</h3>
        <h3>{em}</h3>
        <h3>{ag}</h3>
        <h3>{mo}</h3>
        </>
    )
}
export default Form;