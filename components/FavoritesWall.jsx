"use client";
import { useState, useEffect } from "react";
import PhotoPost from "./PhotoPost";
import styles from "@styles/PhotoWall.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";

function FavoritesWall({ posts }) {
  //all the current posts with the required info
  const [postsList, setPostsList] = useState([]);
  //determines if the loading should appear on the button


  //update postsLists that should appear on window
  useEffect(() => {
    //create PhotoPost elements
    setPostsList(
      posts.map((post) => (
        <PhotoPost
          key={post.id}
          id={post.id}
          userName={post.author}
          postImage={post.download_url}
          width={post.width}
          height={post.height}
          notes={Math.floor(Math.random() * 100)}
        />
      ))
    );
  }, [posts]);

  return (
    <div className={styles.container}>
      <div className={styles.photoWall}>{postsList}</div>
    </div>
  );
}

export default FavoritesWall;
