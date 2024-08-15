/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useRoutes } from "react-router-dom";

import AuthLayout from "./components/layouts/auth/AuthLayout";
import MainLayout from "@app/components/layouts/MainLayout";
import NotFound from "@app/app/pages/errors/NotFound";
// import RequireAuth from "@app/components/layouts/auth/RequireLayout";
// import PublicRoute from "@app/services/middlewares/AuthMiddlewares";

const Login = React.lazy(() => import("@app/app/pages/auth/Login"));
const Signup = React.lazy(() => import("@app/app/pages/auth/Signup"));

const Home = React.lazy(() => import("@app/app/pages/Home"));

const AppRouter: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        // <RequireAuth>
          <MainLayout />
        // </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "",
      element: (
        // <PublicRoute>
          <AuthLayout />
        // </PublicRoute>
      ),
      children: [
        {
          path: "/auth/login",
          element: (
            // <PublicRoute>
            <Login />
            // </PublicRoute>
          ),
        },
        { path: "/auth/signup", element: <Signup /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <React.Fragment>{routes}</React.Fragment>;
};

export default AppRouter;
