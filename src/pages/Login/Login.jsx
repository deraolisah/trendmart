import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import "./Login.scss";
import { useShopContext } from '../../context/ShopContext';
import  { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";


const Login = () => {

  const { userLoggedIn } = useShopContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState('');
  const [error, setError] = useState('');
  // const { login } = useShopContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!isSigningIn){
      setIsSigningIn(true);
      setError('');
      await doSignInWithEmailAndPassword(email, password);
    } else{
      setIsSigningIn(false)
      setError('Failed to log in');
    }
      
      
    // try {
    //   setError('');
    //   await login(email, password);
    //   navigate('/dashboard'); // Redirect after successful login
    // } catch (err) {
        // setError('Failed to log in');
        // console.error(err);
    // }
  }
  


  const onGoogleSignIn = (e) => {
    e.preventDefault()

    if(!isSigningIn){
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      });
    }
  }

  return (
    <div className='login-box'>
      <h2>Login</h2>
      {/* {error && <p>{error}</p>} */}
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button className='cta' type="submit">
          Login
        </button>
        <span>
          Already Have an account? 
          <Link to={'/register'}> Sign In </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;