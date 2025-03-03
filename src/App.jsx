import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About.jsx";
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
import { TherapistLoginContext, TherapistLoginContextProvider } from "./Context/TherapistLoginContext.jsx";
import Appointment from "./Pages/PatientSide/Appointment.jsx";
import AppLayout from "./components/Layout/AppLayout.jsx";
import QuestioningPage from "./Pages/Questions/Couple/Question.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout />
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
        { path: "/Services",
           element: <Services />
        },
        {
          path: "/Login",
          element: (
            <PatientSignUpProvider>
              <Login />
            </PatientSignUpProvider>
          ),
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
          path: "/PatientDashboard",
          element: (
            <PatientSignUpProvider>
              <PatientDashboard />
            </PatientSignUpProvider>
          ),
        },
        {
          path: "/AdminLogin",
          element: (
            <AdminLoginProvider>
              <AdminLogin />{" "}
            </AdminLoginProvider>
          ),
        },
        {
          path: "/AdminDashboard",
          element: (
              <AdminLoginProvider>
                <AdminDashboard />
              </AdminLoginProvider>
          ),

        },
        {path:"/TherapistLogin",
          element:(
            <TherapistLoginContextProvider>
            <TherapistLogin/>
            </TherapistLoginContextProvider>
          )
        },{
          path:"/TherapistDashboard",
          element:(
            <TherapistLoginContext>
            <TherapistDashboard/>
            </TherapistLoginContext>
          )
        },
      ],
    },
    {
      path:"Questions",
      element:<QuestioningPage/>
    }
    ,{
      path:"/Appointment",
      element:<Appointment/>
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
