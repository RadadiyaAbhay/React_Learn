import React, { useState } from 'react'

function Form() {

    let [input, setInput] = useState([{
        name: '',
        email: ''
    }])
    let [pinput , setpInput] = useState([]);

    function handleChange(e ,index) {
        setInput([...input] , [input[index][e.target.name] = e.target.value]);
    }
    function handleAdd(e) {
        console.log("done");
        setInput([...input, { name: '', email: '' }])
    }

    function handleSubmit(e) {
        e.preventDefault();
        setpInput(input);
    }
    return (
        <>
            <div className="container">
                <div className="row">

                    <form action="" className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
                        {
                            input.map((i , index) => {
                                return (
                                    <>
                                        <label>Name</label>
                                        <input type="text" name="name" id="name" value={i.name} onChange={((e)=>{
                                            handleChange(e, index)
                                        })} />
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" value={i.email} onChange={((e)=>{
                                            handleChange(e, index)
                                        })} />
                                    </>
                                )
                            })
                        }

                        <button type="button" onClick={handleAdd}>Add</button>
                        
                        <button type="Submit">Submit</button>
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
                </div>
            </div>
        </>
    )
}

export default Form
