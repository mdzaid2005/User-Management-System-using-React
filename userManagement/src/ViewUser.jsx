import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`https://673612775995834c8a954fe2.mockapi.io/api/v1/tasks/${id}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="container">
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Status:</strong> {user.status}</p>
    </div>
  );
};

export default ViewUser;