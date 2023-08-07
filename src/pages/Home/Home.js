import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useState, useEffect } from "react";

function Home() {
  const user = useSelector((state) => state.user.value);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

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
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="homePage">
        {postLists.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                <div className="postTextContainer">{post.post}</div>
                <h3>@{post.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
