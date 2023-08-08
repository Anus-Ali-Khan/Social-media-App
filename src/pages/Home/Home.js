import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useState, useEffect } from "react";
import "./Home.css";
import { MdDelete } from "react-icons/md";

function Home() {
  const user = useSelector((state) => state.user.value);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

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
    getPosts();
  }, [deletePost]);

  return (
    <div className="home">
      <Navbar />
      <div className="homePage">
        {!user.currentUser.hasOwnProperty("id") ? (
          <div className="Msg">
            <h1>Lets signup and start chat with the world</h1>
          </div>
        ) : (
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
