import React from "react";
import "../CreatePost/CreatePost.css";
import "../CreatePost/Cpnav";
import { Link } from "react-router-dom";

function CreatePost() {
  return (
    <div className="createpostpage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input placeholder="Title..." />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Post..."></textarea>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
