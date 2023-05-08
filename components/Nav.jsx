"use client";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "@styles/Nav.module.scss";
import IconButton from "@mui/material/IconButton";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileContainer}>
        <nav className={styles.navBar}>
          <div className={styles.mobile}>
            <div>
              <Link href="/">
                <IconButton
                  style={{
                    borderRadius: 35,
                    padding: "18px 36px",
                  }}
                >
                  <HomeIcon style={{ color: "white" }} />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link href="/favorites">
                <IconButton
                  style={{
                    borderRadius: 35,
                    padding: "18px 36px",
                  }}
                >
                  <FavoriteIcon style={{ color: "white" }} />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className={styles.desktop}>
          <h1 className={styles.header}>Infinite Wall</h1>
            <div>
              <Link href="/">
                <IconButton
                  style={{
                    borderRadius: 35,
                    padding: "18px 36px",
                  }}
                >
                  <HomeIcon style={{ color: "white" }} />
                  <h3 className={styles.navLabel}>Home</h3>
                </IconButton>
              </Link>
            </div>
            <div>
              <Link href="/favorites">
                <IconButton
                  style={{
                    borderRadius: 35,
                    padding: "18px 36px",
                  }}
                >
                  <FavoriteIcon style={{ color: "white" }} />
                  <h3 className={styles.navLabel}>Liked</h3>
                </IconButton>
              </Link>
            </div>
            <h1 className={styles.header}>by: Mustafa Omran</h1>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
