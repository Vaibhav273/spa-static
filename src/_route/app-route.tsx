import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "../_global/_error";
import React from "react";
import Layout from "../Layout";

const Home = React.lazy(() => import('../pages/_home'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorScreen />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
        ]
    },
]);
export default router;