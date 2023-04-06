import React, { useState } from 'react';

import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';

import './Login.css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login shittt...
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //some fancy firebase register  shittt...
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully created a new user with email and password
            // console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                    type='submit'
                    className='login__signInButton' 
                    onClick={signIn}
                    >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE 
                    conditions of Use & sale. Please see our Privacy notice,
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                onClick={register}
                className='login__registerButton'
                >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
