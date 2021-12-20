import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";
import ThemeContextProvider from "./contexts/ThemeContext";
import {StoreTodoProvider} from "./Store";
import AuthContextProvider from "./contexts/AuthContext";
import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
function App() {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      box2.current,
      {
        y: 100,
        yoyo: true,
        opacity: 1,
        duration: 3,
      },
      {
        y: 0,
        yoyo: true,
        duration: 3,
      }
    );

    tl.to(box2.current, {
      y: 200,
      duration: 3,
    });

    tl.to(
      box1.current,
      {
        y: "100%",
        duration: 1,
      },
      "=+2"
    );

    tl.to(box3.current, {
      scale: 2,
      duration: 4,
    },"-=3.8");

    tl.to(box3.current, {
      scale: 0.2,
      duration: 2,
    },"-=0.5");

    tl.to(box3.current, {
      x: "100%",
      y: "100%",
      duration: 3,
    },"-=0.2");
  }, []);

  return (
    <div className="App">
      <div className="start" ref={box1}>
        <div className="start-name">
          <h1 ref={box2}>I'm Nhat</h1>
        </div>
      </div>
        <div className="start-open" ref={box3}></div>
      <ThemeContextProvider>
        <ThemeToggle />
        <AuthContextProvider>
          <Navbar />
          <StoreTodoProvider>
            <Todos />
          </StoreTodoProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
