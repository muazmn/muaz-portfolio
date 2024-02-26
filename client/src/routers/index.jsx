/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import RootLayout from "../layouts/RootLayout";
import Projects from "../pages/project";
import SingleProject from "../pages/project/_id";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
        // loader: projects
      },
      {
        path: "/project/:id",
        element: <SingleProject />,
        // loader: projectById
      },
    ],
  },
]);
