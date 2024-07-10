import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import './AccountDropdown.scss';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  // Function to handle click outside dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      <button className="user-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className='nav-icon'>
          <HiOutlineUser />
        </div>
        <p className='user-name'> Chioma </p>
        <FaAngleDown className="drop-down"/>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown content here */}
          <ul>
            <li> <CiSettings className='icon' /> Account Settings</li>
            <li> <RiAccountCircleFill className="icon" /> Profile</li>
            <li> <CiLogout />  Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
