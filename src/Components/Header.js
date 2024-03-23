import React from "react";
import userIcon from "../Assets/userIcon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import {useNavigate} from "react-router-dom"
import {useSelector} from 'react-redux'

const Header = () => {

  const navigate= useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <>
      <div className="absolute  w-screen  px-8 py-1 bg-gradient-to-b from-black  z-10 flex justify-between">
        <h4 className=" text-red-500 text-4xl font-extrabold">NETFLIX </h4>

        {user && (<div className="flex">
        <img className="w-10 rounded-lg mx-2" src={user ? user?.photoURL : userIcon} alt="user icon" />
          <button className="font-bold bg-orange-500 rounded-lg w-28" onClick={handleSignOut}>Sign Out</button>
        </div>)}
      </div>
    </>
  );
};

export default Header;
