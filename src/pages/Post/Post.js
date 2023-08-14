import React from "react";
import Cpnav from "../CreatePost/Cpnav";
import "./Post.css";
import { useSelector } from "react-redux";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function Post() {
  const user = useSelector((state) => state.user.value);
  const [postLists, setPostList] = useState([]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  const getPosts = async () => {
    const q = query(
      collection(db, "posts"),
      where("userid", "==", user.currentUser.id)
    );
    const data = await getDocs(q);

    const newPostsList = [];

    for (var i = 0; i < data.docs.length; i++) {
      const docRef = doc(db, "users", data.docs[i].data().userid);
      const userDoc = await getDoc(docRef);

      const postData = {
        ...data.docs[i].data(),
        name: userDoc.data().firstName + userDoc.data().lastName,
      };

      newPostsList.push(postData);
    }

    setPostList(newPostsList);
  };

  console.log(postLists);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postPage">
      <Cpnav />
      <div className="usersPosts">
        <div className="posts">
          {postLists.map((post) => {
            return (
              <div className="post">
                <div className="postHeader">
                  <div className="titlendelete">
                    <div className="title">
                      <h1>{post.title}</h1>
                    </div>
                    <div className="deletePost">
                      <button onClick={() => deletePost(post.id)}>
                        <MdDelete className="delete" />
                      </button>
                    </div>
                  </div>
                  <div className="postTextContainer">{post.post}</div>
                  <h3>@{post.name}</h3>
                  <h3>{post.date.toDate().toDateString()}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
