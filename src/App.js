import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import Instructors from "./Pages/Instructors";
import Students from "./Pages/Students";
import Bookings from "./Pages/Bookings";
import Settings from "./Pages/Settings";
import Signout from "./Pages/Signout";
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />

      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      <Route
        path="/instructors"
        element={<PrivateRoute element={Instructors} />}
      />
      <Route path="/students" element={<PrivateRoute element={Students} />} />
      <Route path="/bookings" element={<PrivateRoute element={Bookings} />} />
      <Route path="/settings" element={<PrivateRoute element={Settings} />} />

      <Route path="/signout" element={<PrivateRoute element={Signout} />} />
    </Routes>
  );
};

export default App;
