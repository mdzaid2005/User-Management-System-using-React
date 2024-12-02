import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://673612775995834c8a954fe2.mockapi.io/api/v1/tasks/${id}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        User Details
      </h1>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Name:</strong> {user.name || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Email:</strong> {user.email || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Phone:</strong> {user.phone || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Role:</strong> {user.role || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Status:</strong> {user.status || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ViewUser;
