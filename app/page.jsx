"use client";
import { useState } from "react";
import PhotoWall from "@components/PhotoWall";

const Home = () => {
  //contain all fetched posts from picsum api
  const [posts, setPosts] = useState([]);
  //makes sure we requests different batches from picsum api
  const [postsBatchNum, setPostsBatchNum] = useState(1);
  return (
    <div>
      <PhotoWall
        posts={posts}
        setPosts={setPosts}
        postsBatchNum={postsBatchNum}
        setPostsBatchNum={setPostsBatchNum}
      />
    </div>
  );
};

export default Home;
