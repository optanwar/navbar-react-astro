import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
// import logo from "../assets/nav-logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  const handleScroll = () => {
    setShowSearch(false);
  };

  return (
    <>
      <nav>
        <NavLink to="/">
          {/* <img className="company-logo" src={logo} alt="Company Logo" /> */}{" "}
          Website logo
        </NavLink>
        <div>
          <ul id="navbar" className={show ? "#navbar active" : "#navbar"}>
            <div onClick={toggleMenu} className="cross-icon">
              <IoMdClose />
            </div>
            {/*           <li className='padding-mobile-nav text-center d-lg-none'><img className='company-logo' src={logo} alt="Company Logo" /></li> */}
            {/* OPTANAWAR */}
            <li
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
              className="active"
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
            >
              <NavLink to="/aboutUs">About</NavLink>{" "}
            </li>
            <li className="hide-cls_nav">
              <NavLink>
                Services
                <IoMdArrowDropdown className="fs10" />
              </NavLink>
              <ul className="sub-menu">
                <li
                  onClick={() => {
                    handleClose();
                    scrollToTop();
                  }}
                >
                  <NavLink to="/services">Front End</NavLink>
                </li>
                <li
                  onClick={() => {
                    handleClose();
                    scrollToTop();
                  }}
                >
                  <NavLink to="/services-cloud">Back-end</NavLink>
                </li>
                <li
                  onClick={() => {
                    handleClose();
                    scrollToTop();
                  }}
                >
                  <NavLink to="/services-car"> Full-Stack</NavLink>
                </li>
                <li
                  onClick={() => {
                    handleClose();
                    scrollToTop();
                  }}
                >
                  <NavLink to="/services-document"> data-base</NavLink>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
            >
              <NavLink to="/contactUs">Contact Us </NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={toggleMenu}>
          <span>
            <RxHamburgerMenu />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
