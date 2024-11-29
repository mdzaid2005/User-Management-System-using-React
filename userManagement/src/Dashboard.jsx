import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://673612775995834c8a954fe2.mockapi.io/api/v1/tasks");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://673612775995834c8a954fe2.mockapi.io/api/v1/tasks/${id}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h1>List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/view/${user.id}`} className="action-button">View</Link>
                <Link to={`/edit/${user.id}`} className="action-button">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="action-button delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
