"use client";
import { useState, useEffect } from "react";
import PhotoPost from "./PhotoPost";
import styles from "@styles/PhotoWall.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";

let postsBatchNum = 4;
function PhotoWall({ posts, setPosts }) {
  //all the current posts with the required info
  const [postsList, setPostsList] = useState([]);
  //determines if the loading should appear on the button
  const [isLoading, setIsLoading] = useState(false);

  //fetch 7 photos from the picsum api and add them to posts
  const getFetchPhotos = () => {
    setIsLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${postsBatchNum}&limit=7`)
      .then((res) => res.json())
      .then((result) => {
        setPosts((oldPosts) => oldPosts.concat(result));
        postsBatchNum++;
      })
      .then(() => {
        // console.log(posts);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getFetchPhotos();
  }, []);

  //update postsLists that should appear on window
  useEffect(() => {
    //make sure there are unique photos even if they are sent again by the api
    const uniqueIds = [];
    const uniquePosts = posts.filter((post) => {
      const isDuplicate = uniqueIds.includes(post.id);

      if (!isDuplicate) {
        uniqueIds.push(post.id);
        return true;
      }

      return false;
    });

    //create PhotoPost elements
    setPostsList(
      uniquePosts.map((post) => (
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
    setIsLoading(false);
  }, [posts]);

  return (
    <div className={styles.container}>
      <div className={styles.photoWall}>{postsList}</div>
      <LoadingButton
        color="secondary"
        size="small"
        onClick={getFetchPhotos}
        loading={isLoading}
        loadingIndicator="Loading…"
        variant="contained"
      >
        Load more posts
      </LoadingButton>
    </div>
  );
}

export default PhotoWall;
