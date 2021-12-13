import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import "../sass/themeToggle.scss"
const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;
  const style = isLightTheme ? light : dark;

  return (
    <div className="toggle" onClick={toggleTheme}>
      <button className={isLightTheme ? "toggle-btn" : 'toggle-btn toggle-active' }></button>
      <div className="toggle-container-icon">
      <div className="toggle-icon">
        🌞
      </div>
      <div className="toggle-icon">
        🌜
      </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
