// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); // State to store the list of users
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Make a GET request to fetch users from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data); // Set the data into state
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        setError("Something went wrong!"); // Handle errors
        setLoading(false); // Set loading to false if there's an error
      });
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>{error}</p>; // Show error message

  return (
    <div>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
