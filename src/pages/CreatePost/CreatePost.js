import React from "react";
import Cpnav from "../CreatePost/Cpnav";
import "./CreatePost.css";
import { useState } from "react";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

function CreatePost() {
  const user = useSelector((state) => state.user.value);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    const id = v4();
    const userPost = {
      id,
      title,
      post,
      date: new Date(),
      userid: user.currentUser.id,
    };
    await setDoc(doc(db, "posts", id), userPost);
    console.log(userPost);
    navigate("/");
  };

  return (
    <div className="createpostpage">
      <Cpnav />
      <div className="CP">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post..."
              onChange={(e) => {
                setPost(e.target.value);
              }}
            ></textarea>
          </div>
          <button onClick={createPost}>Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
