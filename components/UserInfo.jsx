'use client'
import styles from "@styles/UserInfo.module.scss"

function UserInfo({userName = "Guest", id}) {
  return (
    <div className={styles.userInfo}>
      <img className={styles.userImage} src={`https://i.pravatar.cc/150?img=${id%70}`} />
      <h3>{userName}</h3>
    </div>
  );
}

export default UserInfo;
