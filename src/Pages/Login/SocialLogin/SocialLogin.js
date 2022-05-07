import React from 'react';
import google from '../../../Images/Social/google.png'
import fb from '../../../Images/Social/facebook.jpg'
import git from '../../../Images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate();
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate(from, { replace: true });
        navigate('/home')

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary line-set set2'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary  line-set'></div>
            </div>
            <p>{errorElement}</p>
            <div className='btn-style-set'>
                <button onClick={() => signInWithGoogle()} className='btn btn-color mt-3'><img src={google} alt="" />Google sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;