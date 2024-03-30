import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleSerachView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "./Constants";
import { changeLanguage, setOtherURL } from "../Utils/configSlice";
import { toggleMovieSerachView } from "../Utils/searchmovieSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const otherURL = useSelector((store) => store.config.otherURL);

  const showGptSerach = useSelector((store) => store.gpt.showGptSerach);
  const showMovieSerach = useSelector(
    (store) => store.moviesearch.showMovieSerach
  );
  const [showNavItems, setShowNavItems] = useState(false);

  const sm_screen_class =
    " w-80 bg-black/90 absolute flex flex-col right-0 top-11 gap-3 rounded-lg border p-4 border-gray-300 items-center";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribed when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGTPSearch = () => {
    // toggle gpt search
    dispatch(toggleSerachView());
  };

  const handleMovieSearch = () => {
    //toggle move search
    dispatch(toggleMovieSerachView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleNavItems = () => {
    setShowNavItems((prevShowNavItems) => !prevShowNavItems);
  };

  return (
    <>
      <div className="absolute md:px-10 md:py-2 p-4 md:pt-5 z-10 flex items-center justify-between w-full bg-gradient-to-b from-black from-50% ">
        <Link to="/">
          <h4 className=" text-red-600 w- text-3xl font-extrabold ">
            NETFLIX<i className="text-white">Clone</i>{" "}
          </h4>
        </Link>
        {user && (
          <div className="relative">
            <label
              for="nav_bar_icon"
              class="w-8 h-8  cursor-pointer flex flex-col items-center justify-center space-y-1.5 md:hidden"
            >
              <input
                onClick={toggleNavItems}
                checked={showNavItems}
                id="nav_bar_icon"
                type="checkbox"
                class="hidden peer"
              />
              <GiHamburgerMenu className="text-red-600 text-2xl cursor-pointer" />
            </label>

            <div
              className={
                "md:flex md:items-center md:gap-4 md:justify-between" +
                (showNavItems ? " " + sm_screen_class : " hidden")
              }
            >
              <span className="text-white font-italic  font-semibold text-lg text-center">
                WELCOME ( {user?.displayName} )
              </span>

              {otherURL ? (
                <Link to={"/browse"}>
                  <button
                    onClick={() => {
                      dispatch(setOtherURL(false));
                      setShowNavItems(false);
                    }}
                    className="bg-purple-800 text-white px-4 py-1.5 md:w-auto w-28 md:text-lg rounded-md"
                  >
                    Home
                  </button>
                </Link>
              ) : (
                <>
                  {showMovieSerach && (
                    <select
                      className=" rounded-lg bg-gray-900 w-32 text-white p-2"
                      onClick={handleLanguageChange}
                    >
                      {SUPPORTED_LANGUAGE.map((lang) => (
                        <option key={lang.identfire} value={lang.identfire}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <button
                    className=" bg-violet-700 font-bold text-white rounded-lg py-2 mx-4 w-32 "
                    onClick={handleMovieSearch}
                  >
                    {showMovieSerach ? "Home" : "Movie Search"}
                  </button>
                  <button
                    className=" bg-amber-400 font-bold text-black rounded-lg py-2 mx-4 w-32 "
                    onClick={handleGTPSearch}
                  >
                    {showGptSerach ? "Home" : "GPT Search"}
                  </button>
                </>
              )}

              <button
                onClick={() => {
                  handleSignOut();
                  setShowNavItems(false);
                }}
                className="group flex items-center justify-evenly rounded-lg md:justify-start md:w-11 md:h-11 bg-red-600 md:rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg md:hover:w-32 w-[112px] h-9 hover:rounded-lg active:translate-x-1 active:translate-y-1"
              >
                <div className="flex items-center justify-center md:w-full md:transition-all md:duration-300 md:group-hover:justify-start md:group-hover:px-3">
                  <LuLogOut className="text-2xl font-bold" />
                </div>
                <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
