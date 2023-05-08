"use client";
import styles from "@styles/PostContent.module.scss";

function PostContent({
  postImage,
  postText = "This is a default description on the image",
}) {
  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className={styles.postContent}>
      <img className={styles.postImage} src={postImage} alt="random" />
      <div className={styles.text}>
        <p style={textStyle}>{postText}</p>
        <h5 className={styles.tags} style={textStyle}>#nature #beautiful</h5>
      </div>
    </div>
  );
}

export default PostContent;
