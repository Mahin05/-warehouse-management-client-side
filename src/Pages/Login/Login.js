import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Register/Register.css'
import './Login.css'
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    let errorElement;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password reset email sent');
        }
        else {
            toast('Please enter your email');
        }
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        // navigate('/home');
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger mt-3'>Error: {error?.message}</p>
    }
    return (
        <div className='container mx-auto form-style-login'>
            <Form onSubmit={handleLogin} className='container mx-auto form-style'>
            <h2 className='text-login text-center'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Button className='my-2' variant="primary" type="submit">
                    Login
                </Button>
                {errorElement}
                <p className='mt-3'>new here? <Link to='/register' className='text-primary pe-auto'>please register</Link> </p>
                <p className='forget-pass-style'>Forget password?<Link onClick={forgetPassword} to='/login' className='text-primary pe-auto'>Reset Password</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;