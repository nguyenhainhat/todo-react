import {THEME_STATE} from "./types";
export const initState = {
  // themeState: {
    isLightTheme: true,
    light: {
      background: "rgb(255, 255, 255, 0.8)",
      color: "black",
      border: "1px solid #dadde1",
      transition: "all 0.2s linear",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "#ffff",
      border: "1px solid #606770",
      transition: "all 0.2s linear",
    },
  // },
};

export const themeReducer = (state, action) => {
  const {type, payload} = action;
  const {isLightTheme} = state;

  console.log(isLightTheme)

  switch (type) {
    case THEME_STATE:
      return {...state, isLightTheme: !payload.isLightTheme}
    default:
        return state
  }
};
