import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Masterpage from './Masterpage';
import PondDetails from './pages/PondDetails';
import ContactDetails from './pages/ContactDetails';
import PondLocation from './pages/PondLocation';
import PondGraph from './pages/PondGraph';
import ForgotPassword from "./pages/ForgetPassword";
import 'leaflet/dist/leaflet.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />

        {/* Main layout for nested pages */}
        <Route path="/dashboard" element={<Masterpage />}>
          <Route index element={<Navigate to="ponddetails" />} />
          <Route path="ponddetails" element={<PondDetails />} />
          <Route path="contactdetails" element={<ContactDetails />} />
          <Route path="pondlocation" element={<PondLocation />} />

        </Route>

        {/* Standalone route for Graph */}
        <Route path="/pondgraph/:id" element={<PondGraph />} />
      </Routes>
    </Router>
  );
};

export default App;
