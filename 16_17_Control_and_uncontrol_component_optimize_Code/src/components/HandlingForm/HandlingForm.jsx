import { useRef, useState } from "react";

function HandlingForm(){

    const myref = useRef();
    
    const [inputValue ,setInputValue] = useState({
        Fname : '',
        Lname : '',
        Prmail : '',
        Pemail : '',
        coNumber : '',
        age : ''
    });
    const [inputPValue ,setpInputPValue] = useState({
        Fname : '',
        Lname : '',
        Prmail : '',
        Pemail : '',
        coNumber : '',
        age : ''
    });
        
    const handleChange = (e) =>{
        console.log(e.target.value);
        const name = e.target.name;
        setInputValue({ ...inputValue,[name] : e.target.value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setpInputPValue(inputValue);
        setInputValue({
            Fname : '',
            Lname : '',
            Prmail : '',
            Pemail : '',
            coNumber : '',
            age : ''
        });
        console.log(myref);
        myref.current.style.display = "flex";
    }

    return(
        <>
            <h1>Handling Form and Optimization of Code</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Firstname:</label>
                <input type="text" name='Fname' value={inputValue.Fname} onChange={handleChange}/>
                <label>Enter Your Last name:</label>
                <input type="text" name='Lname' value={inputValue.Lname} onChange={handleChange}/>
                <label>Enter Your profe. Email:</label>
                <input type="email" name='Prmail' value={inputValue.Prmail} onChange={handleChange}/>
                <label>Enter Your Personal Email:</label>
                <input type="email" name='Pemail' value={inputValue.Pemail} onChange={handleChange}/>\
                <label>Enter Your Contact Number:</label>
                <input type="number" name='coNumber' value={inputValue.coNumber} onChange={handleChange}/>
                <label>Enter Your age:</label>
                <input type="number" name='age' value={inputValue.age} onChange={handleChange}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <h3 ref={myref} style={{display:'none'}}>
                Name:
                {
                    inputPValue.Fname
                }
                &nbsp;
                {
                    inputPValue.Lname
                }
                 <br/>
                 <br/>
                Professional Email :
                {
                    inputPValue.Prmail
                }
                <br/>
                <br/>
                Personal Email :
                {
                    inputPValue.Pemail
                }
                <br/>
                <br/>
                Contact Number :
                {
                    inputPValue.coNumber
                }
                <br/>
                <br/>
                Age :
                {
                    inputPValue.age
                }
            </h3>
        </>
    )
}

export default HandlingForm;