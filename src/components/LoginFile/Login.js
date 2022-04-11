import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const [signInWithEmailAndPassword, user, loading,  error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const getEmailFun = (e) =>{
        setEmail(e.target.value)
    }
    const getPassWordFun = (e) =>{
        setPassword(e.target.value)
    }

    const logiHandleFun = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }
    if(user){
        navigate(from, {replace : true})
    }

    return (
        <div className='m-5'>
            <h2>Please Login Here</h2>
            <div className='w-50 px-4 py-5 form-style'>
                <Form onSubmit={logiHandleFun}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmailFun} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPassWordFun}  type="password" placeholder="Password" required/>
                    </Form.Group>      

                    {error? <p style={{color : "red"}}>{error.message}</p> : ""}
                    {loading? <p>Loding...</p> : ""}
                    <p>if u r not registerd..! go there... <Link to="/Register">Register</Link> </p>              

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;