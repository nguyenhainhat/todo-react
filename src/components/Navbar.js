import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";
import {TOGGLE_AUTH} from "../reducers/types";
import "../sass/Auth.scss";

const Navbar = () => {
  // Load theme context
  const {theme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;
  const style = isLightTheme ? light : dark;

  // Load auth context
  const {isAuthenticated, dispatch} = useContext(AuthContext);

  return (
    <div className="navbar" style={style}>
      <h1>My Todo App</h1>

      <p>{isAuthenticated ? "You are logged in " : ""}</p>
      <button
        onClick={() => {
          dispatch({
            type: TOGGLE_AUTH,
          });
        }}
        style={style}
        className="navbar-auth">
        
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
