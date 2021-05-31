import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Profile.module.css";
import ReviewContent from "../components/Profile/ReviewContent";
import TextField from "@material-ui/core/TextField";
import background from "../assets/background.jpg";
import { getAdditionalUserInfo } from "../store/reducers/userReducer";
import Loading from "../components/Loading";
import SaveButton from "../components/Profile/SaveButton";

const Profile = () => {
  const { additionalUserInfo, reviews, loading } = useSelector(
    (state) => state.user
  );
  const { user, dateCreation } = useSelector((state) => state.auth);
  const [nickname, setNickname] = useState();
  const [bio, setBio] = useState();
  const dispatch = useDispatch();

  const getName = () => {
    return additionalUserInfo.nickname !== null
      ? additionalUserInfo.nickname
      : user.displayName;
  };

  useEffect(() => {
    dispatch(getAdditionalUserInfo(user.uid));
    if (!loading) {
      setNickname(additionalUserInfo.nickname);
      setBio(additionalUserInfo.bio);
    }
  }, []);

  return (
    <>
      {!loading ? (
        <div className={styles.container}>
          <img
            src={background}
            alt="background"
            className={styles.background}
          />
          <div className={styles.header}>
            <Avatar
              alt={getName()}
              src="/static/images/avatar/1.jpg"
              className={styles.avatarPicture}
              style={{
                background: `${additionalUserInfo.color}`,
                width: "4.5vw",
                height: "4.5vw",
                fontSize: "2.5vw",
              }}
            />
            <TextField
              id="standard-basic"
              label="Nickname"
              defaultValue={getName()}
              style={{ marginLeft: "30px" }}
              onChange={(e) => setNickname(e.target.value)}
              InputProps={{
                style: { color: "#FFFFFF", fontSize: "2em" },
              }}
              InputLabelProps={{
                style: { color: "rgb(31, 32, 48)", fontSize: "1.8em" },
              }}
            />
            <span style={{ marginLeft: "auto" }}>
              Member since:{" "}
              {new Intl.DateTimeFormat("en-GB", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(dateCreation))}
            </span>
          </div>
          <div style={{ marginTop: "25px" }}>
            <TextField
              id="filled-textarea"
              label="Biography"
              multiline
              rows="5"
              defaultValue={additionalUserInfo.bio}
              onChange={(e) => setBio(e.target.value)}
              className={styles.textField}
              style={{
                marginLeft: "5%",
                boxSizing: "border-box",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "grey" },
              }}
            />
            <h1 className={styles.reviewTitle}>My reviews</h1>
            <ReviewContent reviews={reviews} user_info={additionalUserInfo} />
            <SaveButton
              styles={styles}
              additionalUserInfo={additionalUserInfo}
              user={user}
              nickname={nickname}
              bio={bio}
            />
          </div>
        </div>
      ) : (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Profile;
