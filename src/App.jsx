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
import { AdminLoginProvider } from "./Context/AdminLoginContext.jsx";
import TherapistDashboard from "./Pages/Therapist/TherapistDashBoard.jsx";
import TherapistLogin from "./Pages/Therapist/TherapistLogin.jsx";
import { TherapistLoginContextProvider } from "./Context/TherapistLoginContext.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PatientSignUpProvider>
          <TherapistLoginContextProvider>
            {" "}
            <AdminLoginProvider>
              <AppLayout />
            </AdminLoginProvider>
          </TherapistLoginContextProvider>
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
          element: <Login />,
        },
        { path: "/Services", element: <Services /> },
        { path: "/TherapistDashboard", element: <TherapistDashboard /> },
        {
          path: "/PatientDashboard",
          element: <PatientDashboard />,
        },
        { path: "/TherapistLogin", element: <TherapistLogin /> },
        {
          path: "/AdminDashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/AdminLogin",
          element: <AdminLogin />,
        },
        {
          path: "/SignupForm",
          element: <SignupForm />,
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
