import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 bg-black text-white">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to={"/browse"}>
              <button className="bg-violet-700  text-white font-bold p-2 w-32 sm:w-36 rounded-lg hover:bg-opacity-50">
               HomePage
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
