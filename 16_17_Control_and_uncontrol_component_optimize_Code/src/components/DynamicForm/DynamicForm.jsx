import { useState } from "react";

function DynamicForm() {

    const [input, setInput] = useState([{
        name: '',
        email: ''
    }]);

    const [pinput , setpInput] = useState([]);
    function handleAdd() {
        
        setInput([...input , {name: '', email: ''}])
    }

    function handleChange(e ,index) {
        // const updatedInputs = [...input]; data get
        // updatedInputs[index][e.target.name] = e.target.value; data update
        // setInput(updatedInputs); data send
        setInput([...input], [input[index][e.target.name] = e.target.value]);        
    }

    function handleSubmit(e) {
        e.preventDefault();
        setpInput(input);
    }
    return (
        <>
            <h1>Dynamic Form</h1>
            <form action="" onSubmit={handleSubmit}>
               
                {
                    input.map((i , index) => {
                        return (
                            <>
                                <label>Name</label>
                                <input type="text" name="name" value={i.name} onChange={(e)=>{
                                    handleChange(e , index);
                                }}/>
                                <label>Email</label>
                                <input type="email" name="email" value={i.email} onChange={(e)=>{
                                    handleChange(e , index);
                                }}/>
                                <br/>
                            </>
                        )
                    })
                }

                <button type="button" onClick={handleAdd}>
                    Add More
                </button>
                &nbsp;
                <button type="submit">
                    Submit
                </button>
            </form>
            <div>
                {
                    pinput.map((d) => {
                        return(
                            <>
                            <div>
                                <h3>Name :- {d.name}</h3>
                                <h3>Email :- {d.email}</h3>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DynamicForm;