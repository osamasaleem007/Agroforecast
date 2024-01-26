import { SignOutButton } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto py-3">
          <Link to="/">
            <div className="flex items-center gap-4">
              <img src={logo} className="md:h-14 h-12" alt="Logo" />
              <span className="text-lg font-bold text-indigo-800">
                AGROFORECAST
              </span>
            </div>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <SignOutButton
              signOutCallback={() => {
                navigate("/");
              }}
              className="md:flex items-center hidden text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-[12px] px-3 text-center py-3"
            />
            <button
              type="button"
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-indigo-400 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle mobile menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between block w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col md:text-base text-indigo-500 text-sm md:p-0 pl-11 md:pt-0 pt-5 md:space-x-8 rtl:space-x-reverse md:flex-row md:gap-0 gap-2">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/weather">
                <li>Weather</li>
              </Link>
              <SignOutButton
                signOutCallback={() => {
                  navigate("/");
                }}
                className="md:hidden block text-white text-xs bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg text-[12px] w-fit px-2 text-center py-2"
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
