import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-800 text-white">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-lg font-bold">
            <Link to="/" className="hover:text-blue-400">
              User Management
            </Link>
          </h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
            >
              List
            </Link>
            <Link
              to="/add"
              className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-medium"
            >
              Add User
            </Link>
          </div>
        </nav>
      </div>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/view/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
