/** @jsxImportSource @emotion/react */

import BaseComponent from "../BaseComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
