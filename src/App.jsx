import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import AppLayout from "./components/Layout/AppLayout.jsx";
import Landing from "./Pages/HomePage.jsx";
import Login from "./Pages/PatientSide/Login.jsx";
import Services from "./Pages/Services.jsx";
import SignupForm from "./Pages/PatientSide/SignupForm.jsx";
import Feedback from "./Pages/PatientSide/Feedback.jsx";
import Error from "./Pages/Error.jsx";
import { PatientSignUpProvider } from "./Context/PatientSignUpContext.jsx";
import PatientDashboard from "./Pages/PatientSide/PatientDashboard.jsx";
import AdminDashboard from "./Pages/AdmineSide/Dashboard.jsx";
import AdminLogin from "./Pages/AdmineSide/AdminLogin.jsx";
import { AdminLoginContext } from "./Context/AdminLoginContext.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PatientSignUpProvider>
          <AdminLoginContext>
          <AppLayout />
          </AdminLoginContext>
        </PatientSignUpProvider>
      ),
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Feedback",
          element: <Feedback />,
        },
        {
          path: "/Login",
          element: (
              <Login />
          ),
        },
        { path: "/Services", element: <Services /> },
        ,
        {
          path: "/PatientDashboard",
          element: (
              <PatientDashboard />
          ),
        },
        
        ,{
          path:"/AdminDashboard",
          element:(
            <AdminDashboard/>
          )
        },
        {
          path:"/AdminLogin",
          element:<AdminLogin/>
        },
        {
          path: "/SignupForm",
          element: (
            <PatientSignUpProvider>
              <SignupForm />
            </PatientSignUpProvider>
          ),
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
