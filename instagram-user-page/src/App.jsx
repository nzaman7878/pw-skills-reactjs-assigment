// Importing necessary dependencies from React
import { useState } from 'react';
import './App.css';

// Importing the Instagram logo image
import logo from "./assets/instagram.png"

// Functional component App
function App() {
  // Using the useState hook to manage the login state
  const [login, setLogin] = useState(true);

  // Function to toggle between login and signup
  const loginSwitch = () => {
    setLogin(!login);
  }

  // JSX structure for the component
  return (
    <div id='Container'>
      <div id="user">
        {/* Instagram logo */}
        <img src={logo} alt="" />

        {/* Conditional rendering for input fields based on the login state */}
        <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
        <input hidden={login} type="text" name="" placeholder='Full Name' id="" />

        {/* Common input fields for both login and signup */}
        <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
        <input type="text" name="" id="" placeholder='Password' />

        {/* Button with dynamic text based on login state */}
        <button>{login ? "Sign in" : "Sign up"}</button>

        {/* Footer section with conditional text and a clickable span to switch between login and signup */}
        <div id='footer'>
          {login ? "Don't have an account?" : "Have an account?"} <span onClick={loginSwitch}>{login ? "Sign up" : "Log in"}</span>
        </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
