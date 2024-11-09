
import { useContext, useEffect } from 'react'
import './App.css'
import { Login } from './assets/MyComponents/Login'
import UserContext from './assets/context/usercontext/Usercontext'

function App() {
  const {Getdatalocal}=useContext(UserContext);
  useEffect(()=>{
    Getdatalocal();
  },[]);
  return (
      <Login/>
  )
}

export default App
