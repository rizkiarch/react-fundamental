import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import About from "../pages/About";
import RouteLayout from "../layouts/RouteLayout";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [
                {
                    path: "/",
                    element: <Homepage/>,
                },{
                    path: "/about",
                    element: <About/>,
                },
        ],
    },
]);