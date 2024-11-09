
import { useContext, useEffect } from 'react'
import './App.css'
import { Login } from './assets/MyComponents/Login'

import UserContext from './assets/context/usercontext/Usercontext'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './assets/MyComponents/Home';
import Book from './Pages/Book';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },  
  {
    path:"/Register",
    element:<Login/>
  },
  {
    path:"/Book",
    element:<Book/>
  }
]);


function App() {

  const {Getdatalocal}=useContext(UserContext);
  useEffect(()=>{
    Getdatalocal();
  },[]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
