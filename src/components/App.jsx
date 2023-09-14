import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Register from "pages/Register";
import Login from "pages/Login";

import { selectRefreshing } from "redux/selectors";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "redux/authOperations";




export function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  if(isRefreshing) {
    <div><h2>Refreshing...</h2></div>
    return
  }

  return (
      <div className="container">
        <Routes >
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home />} />

          <Route path="contacts" 
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />

          <Route path="register" 
            element={<RestrictedRoute  redirectTo="/contacts"  component={<Register />}/>} />

          <Route path="login" 
            element={<RestrictedRoute  redirectTo="/contacts"  component={<Login />}/>} />   
          
        </Route>
      </Routes>  

      </div>
  )
}

 // if(isError) {
  //   return (
  //     <>
  //       <h1>Error. Sorry, something went wrong</h1>
  //     </>
  //   )
  // }
