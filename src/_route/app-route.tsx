import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "../_global/_error";
import React from "react";
import Layout from "../Layout";

const Home = React.lazy(() => import('../pages/_home'));
const About = React.lazy(() => import('../pages/_about'));
const Services = React.lazy(() => import('../pages/_services'));
const Location = React.lazy(() => import('../pages/_location'));
const Contact = React.lazy(() => import('../pages/_contact'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorScreen />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/about-us", element: <About /> },
            { path: "/service", element: <Services /> },
            { path: "/our-locations", element: <Location /> },
            { path: "/contact-us", element: <Contact /> },
        ]
    },
]);
export default router;