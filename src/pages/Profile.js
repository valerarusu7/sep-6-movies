import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAdditionalUserInfo } from "../store/reducers/userReducer";
import styles from "../styles/Profile.module.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ReviewContent from "../components/Profile/ReviewContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import background from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "4.5vw",
    height: "4.5vw",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { additionalUserInfo } = useSelector((state) => state.user);
  const { user, dateCreation } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdditionalUserInfo(user.uid));
  }, []);

  const getName = () => {
    return additionalUserInfo.user_info.nickname !== null
      ? additionalUserInfo.user_info.nickname
      : user.displayName;
  };

  return (
    <div className={styles.container}>
      <img src={background} alt="background" className={styles.background} />
      <div className={styles.header}>
        <Avatar
          alt={getName()}
          src="/static/images/avatar/1.jpg"
          className={classes.avatar}
          style={{ background: `${additionalUserInfo.user_info.color}` }}
        />
        <TextField
          id="standard-basic"
          label={getName()}
          style={{ marginLeft: "30px" }}
          InputProps={{
            style: { color: "#FFFFFF", fontSize: "2em" },
          }}
          InputLabelProps={{
            style: { color: "#FFFFFF", fontSize: "1.8em" },
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

      <h1 style={{ marginLeft: "5%" }}>My reviews</h1>
      <ReviewContent
        reviews={additionalUserInfo.reviews}
        user_info={additionalUserInfo.user_info}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save changes
      </Button>
    </div>
  );
};

export default Profile;
