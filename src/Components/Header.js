import React, { useEffect } from "react";
import userIcon from "../Assets/userIcon.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {

  const dispatch = useDispatch()

  const navigate= useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName,photoURL:photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL: photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

  },[])




  return (
    <>
      <div className="absolute  w-screen px-8 py-1 bg-gradient-to-b from-black  z-10 flex justify-between">
        <h4 className=" text-red-500 text-4xl font-extrabold">NETFLIX </h4>

        {user && (<div className="flex">
        <img className="w-10 rounded-lg mx-4" src={user?.photoURL} alt="user icon" />
        <button className="font-bold bg-white rounded-lg w-20" onClick={handleSignOut}>Sign Out</button>
        </div>)}
      </div>
    </>
  );
};

export default Header;
