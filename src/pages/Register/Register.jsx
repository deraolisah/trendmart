import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Register.scss";
import { useShopContext } from '../../context/ShopContext';
// import  { dosignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';


const Register = () => {

  const navigate = useNavigate();
   const { userLoggedIn } = useShopContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if(!isRegistering){
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  }

  return (
    <div>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      Register as a New User
    </div>
  )
}

export default Register;