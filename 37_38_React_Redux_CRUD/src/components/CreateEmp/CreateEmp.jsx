import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { createEmpAction } from '../../services/actions/empAcion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


function CreateEmp() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [inputEmp, setinputEmp] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })
    const handleInput = (e) => {
        setinputEmp({ ...inputEmp, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let count = 0;
        let empInputLength = 0;
        for(const emp in inputEmp){
            if(inputEmp[emp] == ''){
                const error = document.getElementById(emp);
                error.innerHTML=`This Filed Is Required`;

            }else{
                const error = document.getElementById(emp);
                error.innerHTML=``
                count++;
            }
            empInputLength++;
        }
        if(count == empInputLength){
            let id = Math.floor(Math.random()*100000);
            let newEmp = {...inputEmp , id : id};
            dispatch(createEmpAction(newEmp));
            setinputEmp({
                fname: '',
                lname: '',
                email: '',
                password: ''
            })
            navigate("/")
        }
    }
    return (
        <>
            <section className='pt-5'>
                <div className="container">
                    <div className="row">
                        <form onSubmit={handleSubmit}>

                            <div className="col-12 d-flex gap-3">
                                <FloatingLabel controlId="floatingPassword2" label="First Name" className='mb-3 col-6'>
                                    <Form.Control type="text" placeholder="Enter fname" name='fname' value={inputEmp.fname} onChange={handleInput} />
                                    <p id="fname" className='p-0 m-0 text-danger'></p>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword1" label="Last Name" className='mb-3 col-6'>
                                    <Form.Control type="text" placeholder="Enter lname" name='lname' value={inputEmp.lname} onChange={handleInput} />
                                    <p id="lname" className='p-0 m-0 text-danger'></p>
                                </FloatingLabel>
                            </div>
                            <div className="col-12 d-flex gap-3">
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 col-6">
                                    <Form.Control type="email" placeholder="name@example.com" name='email' value={inputEmp.email} onChange={handleInput} />
                                    <p id="email" className='p-0 m-0 text-danger'></p>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3 col-6'>
                                    <Form.Control type="password" placeholder="Password" name='password' value={inputEmp.password} onChange={handleInput} />
                                    <p id="password" className='p-0 m-0 text-danger'></p>
                                </FloatingLabel>
                            </div>
                            <div className="col-12">
                                <Button variant="dark" type='submit'>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateEmp;