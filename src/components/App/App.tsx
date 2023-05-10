/** @jsxImportSource @emotion/react */

import BaseComponent from "../BaseComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
]);

function App() {
  return (
    <BaseComponent hasMenu>
      <RouterProvider router={router} />
    </BaseComponent>
  );
}

export default App;
