import React, { useState, useEffect } from "react";

const UserPage = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const userName = localStorage.getItem("user_name");
    setUserId(userId);
    setUserName(userName);
  }, []);

  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>User ID: {userId}</p>
      <p>User Name: {userName}</p>
    </div>
  );
};

export default UserPage;
