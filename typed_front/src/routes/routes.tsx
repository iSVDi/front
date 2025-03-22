import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);
