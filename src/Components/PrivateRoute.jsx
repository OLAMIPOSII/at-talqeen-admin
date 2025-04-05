import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
