import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Todos from './components/Todos'
import ThemeContextProvider from './contexts/ThemeContext'
import { StoreTodoProvider } from './Store'
import AuthContextProvider from './contexts/AuthContext'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
function App() {
  const box1 = useRef();
  const box2 = useRef();
  
  useEffect(() => {

    const tl = gsap.timeline()
    tl.fromTo(box2.current, {
      y: 100,
      yoyo: true,
      opacity: 1,
      duration: 3
    },
    {
      y: 0,
      yoyo: true,
      duration: 3
    }
    );
    tl.to(box2.current, {
      y: 200,
      duration: 3
    });
    tl.to(box1.current, {
      x: '100%',
      duration: 3
    })
    
  }, []);
  return (
    <div className='App'>
      <div className='start' ref={box1}>
        <div className='start-name'>
          <h1 ref={box2}>I'm Nhat</h1>
        </div>
      </div>
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
  )
}

export default App
