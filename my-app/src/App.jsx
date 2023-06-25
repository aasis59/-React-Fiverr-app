import React from "react";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./componets/footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/order/Order";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import "./App.scss";





import {
  createBrowserRouter,
   RouterProvider, Outlet
 } from "react-router-dom";


function App() {
  const Layout = () =>{
    return(
      <div className="app">
       <Navbar/>
       <Outlet/>
       <Footer/>


      </div>  
        );
  }
  const router = createBrowserRouter ([{
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/gigs",
        element:<Gigs/>
      },
      {
        path:"gig/:id",
        element:<Gig/>
      },
      {
        path:"/orders",
        element:<Orders/>
      },
      {
        path:"/myGigs",
        element:<MyGigs/>
      },
      {
        path:"/add",
        element:<Add/>
      },
      {
        path:"/messages",
        element:<Messages/>
      },
      {
        path:"/message/:id",
        element:<Message/>
      },

    ]

  },

]); 
  return (
    <div>
      <RouterProvider router={router} /> 

    </div>
  );
}

export default App;