import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../services/actions/admin.action";
import { useNavigate } from "react-router";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { IoClose } from "react-icons/io5";


export default function Login() {
    let { isLogin, isLoading, err } = useSelector(state => state.adminReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [error, setError] = useState(false)

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(adminLogin(user));
        setError(true)
    }
    useEffect(() => {

        if (isLogin) {
            navigate('/dashboard');
        }

    },[isLogin])
    if (isLoading) {
        return (
          <>
            <div className="d-flex align-items-center justify-content-center" style={{height : "100vh"}}>
              <div className="loader"></div>
            </div >
    
          </>
        )
      } else {
    return (
        <>
            <div className=" w-100 d-flex align-items-center" style={{ height: "100vh" }}>
                <div className="w-100 d-flex justify-content-center ">
                    <div className="shadow   bg-white  p-5 col-lg-4 col-md-6 col-11 rounded-4">
                        <h2 className="text-black fw-bold text-center mb-0">Admin</h2>
                        <p className="mb-4 text-center fw-medium">Login With Your Account</p>
                        {error && err != null ? (<div className="flex mt-4">
                        <p className="py-2 border bg-secondary-subtle  px-3 col-12 d-flex justify-content-between rounded-3 fw-semibold border-2 border-danger text-danger align-items-center">{err.code}<span onClick={() => setError(false)}><IoClose className="fs-5 point" /></span></p>
                        </div>) : (<></>)}
                        <Form onSubmit={handleSubmit} method="POST">
                            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3 text-black bg-transparent">
                                <Form.Control className="text-black bg-transparent" name="username" type="email" autoComplete="email" required value={user.username} onChange={handleInput} placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-black bg-transparent" >
                                <Form.Control type="password" placeholder="Password" className="text-black bg-transparent" name="password" onChange={handleInput} value={user.password} autoComplete="current-password" required />
                            </FloatingLabel>
                            <Button variant="dark" className="w-100" type="submit"
                            >
                                Sign in</Button>

                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
}
