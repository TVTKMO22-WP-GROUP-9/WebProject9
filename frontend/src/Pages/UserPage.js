import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

const UserPage = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const userName = localStorage.getItem("user_name");
    setUserId(userId);
    setUserName(userName);
  }, []);

  const deleteUser = (userId) => {
    fetch(`https://webproj9.oulu.azatotweb.com/user/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        } else {
          console.error("ok");
        }
        // Handle successful deletion
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });

    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the User Page</h1>
      <p>User ID: {userId}</p>
      <p>User Name: {userName}</p>
      <br></br>
      <p>Are you sure you want to delete your account?</p>

      <Button onClick={() => setShowDeleteModal(true)}>Delete User</Button>
      <Offcanvas
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Delete Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Are you sure you want to delete your account?</p>
          <Button variant="danger" onClick={() => deleteUser(userId)}>
            Delete
          </Button>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default UserPage;
