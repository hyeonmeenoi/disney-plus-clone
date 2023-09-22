import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/detail",
    element: (
      <>
        <Header />
        <Detail />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
