import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-black border-t-2 text-white w-full">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center mx-10 flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-600">
            <h1 className=" text-red-600 text-xl font-extrabold">
              NetflixCLONE
            </h1>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shubhamsingh12345/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/singh123shubham"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://main--fastidious-cheesecake-e6cc7e.netlify.app/about"
            >
              About Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
