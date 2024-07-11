import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
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
            <li className='hide' style={{color: "var(--primary-color)"}}> Chioma Oluremi </li>
            <li className='hide'> <MdLocationPin className="icon" /> Track Order </li>
            <li className='hide'> <BsHeadset className="icon" /> Customer Support </li>
            <li className='hide'> <PiWarningCircleBold className="icon" /> Need Help ? </li>
            <li> <CiSettings className='icon' /> Account Settings </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
