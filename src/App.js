import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

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
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
