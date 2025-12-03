import React, { useContext } from "react";
import { UserContext } from "../App"; // adjust path if necessary
import { ThemeContext } from "../App"; // adjust path if necessary

function ChildC() {
  const user = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    }
    else{
        setTheme("dark");
    }
  }
  return (
    <div style={{ backgroundColor: theme === "light" ? "pink" : "black", height: "100vh" }}>
      {/* Hello, This is ChildC. My name is {user.name}. */}
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default ChildC;