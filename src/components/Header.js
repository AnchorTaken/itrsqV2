// Packages
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

// Logo
import logo from "../assets/img/logo.svg";
import logo_orange from "../assets/img/logo_orange.svg";
import original from "../assets/img/original-logo.png";
import WhatsApp from "./Communication/WhatsApp.js";

const Header = ({ userToken, setTokenAndId }) => {
  const history = useHistory();
  const location = useLocation();
  // States
  const [burgerModal, setBurgerModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [changePath, setPath] = useState(window.location.pathname);
  
  // Logout Handle
  const logoutHandle = (e) => {
    setTokenAndId();
    setProfileModal(!profileModal);
    setBurgerModal(false);
    history.push("/");
    setPath(e.window.location.pathname);
  };

  const menuOn = () => {
    setBurgerModal(!burgerModal);
    document.body.style.overflowY = burgerModal ? "scroll" : "hidden";
  };
  const menuOff = (e) => {
    setBurgerModal(!burgerModal);
    setPath(e.target.pathname);
    history.push("/");
    document.body.style.overflowY = burgerModal ? "scroll" : "hidden";
  };
  return (
    <div className="header">
      {burgerModal && (
        <div className="burger-modal" data-aos="slide-right" data-aos-duration="100" data-aos-easing="ease-in-out">
          <div className="logo-plus-close">
          <img
            src={logo_orange}
            alt="ITRSQ LOGO"
            className="header__logo"
            onClick={(e) => menuOff(e)}
          />
          <i
            className="fas fa-times icn-x"
            onClick={() => menuOn()}
          ></i></div>
          <div className="menu-list">
            <div className={"btn-wrapper " + (changePath === "/itrsq/" && "active")}>
          <Link
            to="/"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            Home
          </Link></div>
          <div className={"btn-wrapper " + (changePath === "/itrsq/website" && "active")}>
          <Link
            to="/website"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            Website
          </Link>
           </div>
           <div className={"btn-wrapper " + (changePath === "/itrsq/support" && "active")}>
          <Link
            to="/support"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            IT Support
          </Link></div>
          <div className={"btn-wrapper " + (changePath === "/itrsq/blog" && "active")}>
          <Link
            to="/blog"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            Blog
          </Link>
          </div>
          <div className={"btn-wrapper " + (changePath === "/itrsq/tools" && "active")}>
          <Link
            to="/tools"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            Tools
          </Link>
          </div>
          <div className={"btn-wrapper " + (changePath === "/itrsq/about" && "active")}>
          <Link
            to="/about"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
            About Us
          </Link>
          </div>
          <div className={"btn-wrapper " + (changePath === "/itrsq/contact" && "active")}>
          <Link
            to="/contact"
            className="menu-mobile-text"
            onClick={(e) => menuOff(e)}
          >
          Contact
          </Link>
          </div>
          
          {userToken ? (
            <>
              {userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? (
                <Link
                  to="/admin"
                  className="txt-header-medium-dynamic"
                  onClick={() => setBurgerModal(false)}
                >
                  Admin
                </Link>
              ) : (
                <>
                  <Link
                    to="/projects"
                    className="txt-header-medium-dynamic"
                    onClick={() => setBurgerModal(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/settings"
                    className="txt-header-medium-dynamic"
                    onClick={() => setBurgerModal(false)}
                  >
                    Settings
                  </Link>
                </>
              )}
              <a
                className="txt-header-medium-dynamic"
                onClick={() => logoutHandle()}
              href="/#">
                Logout
              </a>
            </>
          ) : (
            <>
              {/* <Link
                to="/login"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="txt-header-medium-dynamic"
                onClick={() => setBurgerModal(false)}
              >
                Signup
              </Link> */}
            </>
          )}
        </div>
        <div className="bottom-socials-holder">
        <div className="bottom-socials-app">
                <div className="socials">
                <a href="https://www.facebook.com/ITRSQ" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/itrsq2000/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/ItrsqS" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/itrsq/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUUs-ri1zJU_mYumBbzjO6g"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@itrsq?" target="_blank" rel="noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
             
             </div>
             </div>
        </div>
      )}
      <div className="header__container">
        <div className="main-head">
          <img
            src={logo}
            alt={logo}
            className="header__logo"
            onClick={() => history.push("/")}
          />
          <div>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "header__clicked" : "underline-grow"
              }
            >
              Home
            </Link>
            <Link
              to="/website"
              className={
                location.pathname === "/website"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Website
            </Link>
            <Link
              to="/support"
              className={
                location.pathname === "/support"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              IT Support
            </Link>
            <Link
              to="/blog"
              className={
                location.pathname === "/blog"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Blog
            </Link>
            <Link
              to="/tools"
              className={
                location.pathname === "/tools"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              Tools
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "header__clicked"
                  : "underline-grow"
              }
            >
              About
            </Link>
          </div>
        </div>
        <div>
          {/* <div>
            <i
              className="fas fa-user login-icon"
              onClick={() => {
                setProfileModal(!profileModal);
              }}
            ></i>
            {profileModal && (
              <div className="header__profileModal">
                {userToken ? (
                  <>
                    {userToken === "Icj9uXDIVFuXffUpiGH1FhFLkwJxvePF" ? (
                      <Link
                        to="/admin"
                        onClick={() => setBurgerModal(false)}
                        data-aos="fade-down"
                        data-aos-delay={100}
                      >
                        Admin
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/projects"
                          onClick={() => setBurgerModal(false)}
                          data-aos="fade-down"
                          data-aos-delay={100}
                        >
                          Projects
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setBurgerModal(false)}
                          data-aos="fade-down"
                          data-aos-delay={200}
                        >
                          Settings
                        </Link>
                      </>
                    )}
                    <a data-aos="fade-down" onClick={() => logoutHandle()}>
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="login-button"
                      data-aos="fade-down"
                      data-aos-delay={100}
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="login-button"
                      data-aos="fade-down"
                      onClick={() => {
                        setProfileModal(!profileModal);
                      }}
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div> */}

          <Link className="contact-btn btn-main orange-color" to="/contact">
          <span>Contact</span>  
          </Link>
          <span onClick={() => menuOn()} className="btn-collider"><span className="burger-bnt"></span></span>  
        </div>
      </div>
    </div>
  );
};

export default Header;
