/** @jsxImportSource @emotion/react */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseComponent from "../BaseComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent hasMenu>Home</BaseComponent>,
  },
  {
    path: "/account",
    element: <BaseComponent hasMenu>Minha Conta</BaseComponent>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
