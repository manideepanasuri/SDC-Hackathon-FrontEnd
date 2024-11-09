
import { useContext, useEffect } from 'react'
import './App.css'
import { Login } from './assets/MyComponents/Login'
<<<<<<< Updated upstream
import UserContext from './assets/context/usercontext/Usercontext'
=======
import { Home } from './assets/MyComponents/Home'
import { Navbar } from './assets/MyComponents/Navbar'
>>>>>>> Stashed changes

function App() {
  const {Getdatalocal}=useContext(UserContext);
  useEffect(()=>{
    Getdatalocal();
  },[]);
  return (
<<<<<<< Updated upstream
      <Login/>
=======
    <>
      <Navbar/>
      <Home/>
    </>
>>>>>>> Stashed changes
  )
}

export default App
