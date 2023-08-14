import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useState, useEffect } from "react";
import "./Home.css";

import { AiFillLike } from "react-icons/ai";

function Home() {
  const user = useSelector((state) => state.user.value);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [like, setLike] = useState(0);

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

  useEffect(() => {
    getPosts();
  }, []);

  const handleLikeClick = async (post) => {
    if (user.currentUser.hasOwnProperty("id")) {
      const postLike = post.likes;
      function userLikes(userid) {
        return userid !== user.currentUser.id;
      }

      if (postLike.includes(user.currentUser.id)) {
        const newLikeArray = postLike.filter(userLikes);
        const removelikeTofirebase = doc(db, "posts", post.id);
        await setDoc(
          removelikeTofirebase,
          { likes: newLikeArray },
          { merge: true }
        );
      } else {
        postLike.push(user.currentUser.id);
        const addLikeToFirbase = doc(db, "posts", post.id);
        await setDoc(addLikeToFirbase, { likes: postLike }, { merge: true });
      }

      getPosts();
    }
  };

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
                    </div>
                    <div className="postTextContainer">{post.post}</div>
                    <h3>@{post.name}</h3>
                    <h3>{post.date.toDate().toDateString()}</h3>

                    <div className="like-btn">
                      <button
                        onClick={() => handleLikeClick(post)}
                        style={{ marginBottom: "0.5rem" }}
                      >
                        <AiFillLike
                          style={{
                            fontSize: "1.5rem",
                            width: "3rem",
                            color: post.likes.includes(user.currentUser.id)
                              ? "blue"
                              : "grey",
                          }}
                        />
                      </button>
                      <p>Likes {post.likes.length}</p>
                    </div>
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
