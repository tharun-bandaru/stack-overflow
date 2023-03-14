import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../actions/currentUser";
import decode from "jwt-decode";
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import Avtar from "../../Avtar/Avtar";
import "./Navbar.css";
const Navbar = () => {
  var User = useSelector((state) => state.currentUserReducer);
  console.log("checking user", User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
  });

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item  nav-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item mid-nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item mid-nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item mid-nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search.." />
          <img src={Search} className="search-icon" alt="search" />
        </form>
        {User == null ? (
          <Link to="/Auth" className="nav-item nav-link">
            Log in
          </Link>
        ) : (
          <>
            <Avtar
              backgroundColor="#009dff"
              borderRadius="50%"
              px="15px"
              py="9px"
              color="white"
            >
              <Link
                to={`/User/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avtar>
            <button className="nav-item nav-link " onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
