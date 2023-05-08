import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import styles from "@styles/PhotoPost.module.scss";

function PhotoPost(props) {
  //get the height of the component(300px is the width of the photo in window)
  const x = Math.floor((props.height / props.width) * 300 + 230);
  //define component end
  const height = {
    gridRowEnd: "span " + x,
  };

  return (
    <div className={styles.photoPost} style={height}>
      <UserInfo
        userName={props.userName}
        id={props.id}
      ></UserInfo>
      <PostContent
        postImage={props.postImage}
        postText={props.PhotoPost}
        id={props.id}
      ></PostContent>
      <PostActions id={props.id}/>
    </div>
  );
}

export default PhotoPost;
