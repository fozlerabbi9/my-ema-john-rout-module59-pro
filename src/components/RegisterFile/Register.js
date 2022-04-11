import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();       

    const getEmailFun = (e) =>{
        setEmail(e.target.value)
    }
    const getPassWordFun = (e) =>{
        setPassword(e.target.value)
    }
    const getConfirmPassWordFun = (e) =>{
        setConfirmPass(e.target.value)
    }
    const fromSubmitFun = (e) =>{
        e.preventDefault();
        if(password !== confirmPass){
            setError("Your PassWord was Not Matching")
            return;
        }
        if(password.length < 6){
            setError("U most have 6 charecters");
            return;
        }
        createUserWithEmailAndPassword(email, password);

        console.log(email, password, confirmPass);
    }
    if(user){
        navigate("/")
    }

    return (
        <div className='m-5'>
            <h3>Register Here</h3>
            <div className='w-50 px-4 py-5 form-style'>
                <Form onSubmit={fromSubmitFun}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmailFun} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPassWordFun} type="password" placeholder="Password" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confar-Password</Form.Label>
                        <Form.Control onBlur={getConfirmPassWordFun} type="password" placeholder="Password" required/>
                    </Form.Group>
                    {
                        error? <p style={{color : "red"}}>{error}</p> : ""
                    }
                    {
                        loading? <p>Loading...</p> : ""
                    }
                    <p>if u registerd go... <Link to="/login">Login form</Link> </p>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>

        </div>
    );
};

export default Register;