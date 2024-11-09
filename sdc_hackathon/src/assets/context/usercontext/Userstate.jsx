import { useState, useEffect } from "react";
import UserContext from "./Usercontext";

export default function Userstate(props) {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const host = import.meta.env.VITE_BACKEND_HOST;

  async function Register() {
    // Redirect to Google OAuth
    window.location.href = `${host}/auth/google`; // This replaces `window.open` with `_self`
  
    // When the page reloads after OAuth, this code will run:
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('token');
    console.log(accessToken);
    // Store the token securely
    if (accessToken) {
      localStorage.setItem('token', accessToken);
      // Optionally, clean up the URL
      window.history.replaceState({}, document.title, '/');
      Getdatalocal();
    }
  }
  
  async function Getdatalocal() {
    const token=localStorage.getItem("token");
    try {
      const res = await fetch(`${host}/verifyjwt`, {
        method: "POST",  // Change to POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token }),
      });
      const resp = await res.json();
      console.log(resp);
      setAuth(true);
      setUser(resp.user);
      setToken(token);
    } catch (error) {
      console.error("JWT verification failed:", error);
    }
  }


  return (
    <UserContext.Provider value={{ auth, token, user, Register,Getdatalocal }}>
      {props.children}
    </UserContext.Provider>
  );
}
