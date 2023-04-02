import React, { useState } from "react";

function VisualizationForm() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(""); // add user ID state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/visualization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        text,
        user_id: userId, // include user ID in the request body
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        {" "}
        {/* add input field for user ID */}
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default VisualizationForm;
