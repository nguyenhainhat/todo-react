import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import "../sass/themeToggle.scss";
const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;
  // const style = isLightTheme ? light : dark;

  // theme: true -> false

  return (
    <div className="toggle">
      <button
        className={isLightTheme ? "toggle-btn" : "toggle-btn toggle-active"}
        onClick={toggleTheme}></button>
      <div className="toggle-container-icon">
        <div className="toggle-icon">🌞</div>
        <div className="toggle-icon">🌜</div>
      </div>
    </div>
  );
};

export default ThemeToggle;
