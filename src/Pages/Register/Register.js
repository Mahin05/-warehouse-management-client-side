import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin'
import { toast, ToastContainer } from 'react-toastify';
import './Register.css'
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const navigate = useNavigate();
    const [terms, setTerms] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (loading) {
        return <Loading></Loading>
    }
    // const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const handleRegistration = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        navigate('/home');
    }
    return (
        <div>
            <Form onSubmit={handleRegistration} className='container mx-auto form-style'>
                <h2 className='text-reg text-center'>Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                <label className={terms ? 'ms-2 text-primary' : 'ms-2 text-danger'} htmlFor="terms">Accept terms & conditions</label> <br />
                <Button disabled={!terms} className='my-2' variant="primary" type="submit">
                    Register
                </Button>
                <p>Already registered? <Link to='/login' className='text-primary pe-auto'>please login</Link> </p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer/>
        </div>
    );
};

export default Register;