"use client";
import { useState, useEffect } from "react";
import FavoritesWall from "@components/FavoritesWall";

const Favorites = () => {
  //contain all fetched posts from picsum api
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    for (const id of favorites) {
      fetch(`https://picsum.photos/id/${id}/info`)
        .then((res) => res.json())
        .then((result) => {
          setPosts((oldPosts) => oldPosts.concat(result));
        })
        .catch(console.log);
    }
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        <FavoritesWall posts={posts} setPosts={setPosts} />
      ) : (
        "Please like some posts"
      )}
    </div>
  );
};

export default Favorites;
