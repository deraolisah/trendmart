import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import './AccountDropdown.scss';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  // Use the AuthContext
  const { currentUser, logout } = useAuth();


  // Function to handle click outside dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle user icon click
  const handleUserIconClick = () => {
    if (currentUser) {
      // If logged in, toggle dropdown
      setIsOpen(!isOpen);
    } else {
      // If not logged in, navigate to login page
      navigate('/login');
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      <button className="user-icon" onClick={handleUserIconClick}>
        <div className='nav-icon'>
          <HiOutlineUser />
        </div>
        {currentUser && <p className='user-name'>{currentUser.email}</p>}
        {currentUser && <FaAngleDown className="drop-down"/>}
      </button>

      {currentUser && isOpen && (
        <div className="dropdown-content">
          <ul>
            <li className='hide' style={{color: "var(--primary-color)"}}> 
              {currentUser.email} 
            </li>


      {/* <button className="user-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className='nav-icon'>
          <HiOutlineUser />
        </div>
        <p className='user-name'> Chioma </p>
        <FaAngleDown className="drop-down"/>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown content here */}
          {/* <ul>s
            <li className='hide' style={{color: "var(--primary-color)"}}> Chioma Oluremi </li>

            <li className='hide'> <MdLocationPin className="icon" /> Track Order </li>
            <li className='hide'> <BsHeadset className="icon" /> Customer Support </li>
            <li className='hide'> <PiWarningCircleBold className="icon" /> Need Help ? </li>
            <li> <CiSettings className='icon' /> Account Settings </li>  */}
            <li onClick={handleLogout}> Logout </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;