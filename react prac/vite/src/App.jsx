// import './App.css'
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import Footer from './components/Footer.jsx'
// import Usestate from './components/useState.jsx'
// import Todo from './components/Todo.jsx'
// import Formfill from './components/Formfill.jsx'
// import Hook from './components/Hook.jsx'
// function App() {
  
//   return (
//       <div style={{width:"100vw", height:"100vh" , margin:"0", padding:"0"}}>
//         {/* <Navbar />
//         <Home />
//         <Footer /> */}
//         {/* <Usestate/> */}
//         {/* <Formfill />
//         <Todo /> */}
//         <Hook />
//       </div>
//   )
// }

// export default App



import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "ME" });
  const [theme, setTheme] = useState("dark");

  return (
    <>
      {/* Wrap ThemeContext inside UserContext so ChildA gets BOTH */}
      {/* <UserContext.Provider value={user}> */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          
          <div >
            <ChildA />
          </div>

        </ThemeContext.Provider>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;