import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/add" className="nav-link">Add User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/view/:id" element={<ViewUser />} />
      </Routes>
    </Router>
  );
};

export default App;
