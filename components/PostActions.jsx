"use client";
import { useState, useEffect } from "react";
import styles from "@styles/PostActions.module.scss";
import SendIcon from "@mui/icons-material/Send";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function PostActions({ id }) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLiked(favorites.includes(id));
  }, [liked]);

  const addToFavorites = () => {
    // Retrieve the existing array from localStorage or create an empty array
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const idIndex = favorites.indexOf(id);

    setLiked(!liked);
    if (idIndex !== -1) {
      favorites.splice(idIndex, 1);
      setLikes((likes) => likes - 1);
    } else {
      favorites.push(id);
      setLikes((likes) => likes + 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    console.log(favorites);
  };

  return (
    <div className={styles.postActions}>
      <div className={styles.likes}>{likes > 0 && likes + " likes"}</div>
      <div className={styles.actions}>
        <SendIcon />
        <CommentOutlinedIcon />
        <CachedOutlinedIcon />
        {liked ? (
          <FavoriteIcon onClick={addToFavorites} />
        ) : (
          <FavoriteBorderIcon onClick={addToFavorites} />
        )}
      </div>
    </div>
  );
}

export default PostActions;
