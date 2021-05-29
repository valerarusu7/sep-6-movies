import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import InputArea from "./InputArea";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import { AiFillExclamationCircle } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: 400,
    margin: "5%",
    background: "rgb(31, 32, 48)",
    fontWeight: "lighter",
  },
  horizontal: {
    width: "auto",
    display: "flex",
    paddingTop: 20,
  },
  avatarContent: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: "3.5vw",
    height: "3.5vw",
  },
  secondPart: {
    width: "89%",
  },
  horizontalTwo: {
    width: "auto",
    display: "flex",
  },
  rating: {
    marginLeft: "auto",
  },
  date: {
    color: "grey",
  },
  noReviews: {
    textAlign: "center",
    fontSize: "2em",
  },
}));

export default function ReviewContent({ reviews, user_id, movie_id }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {reviews.length === 0 ? (
          <p className={classes.noReviews}>No reviews. Be the first one!</p>
        ) : (
          <>
            {reviews.map((review) => {
              return (
                <div key={review.user_id}>
                  <div className={classes.horizontal}>
                    <div className={classes.avatarContent}>
                      <Avatar
                        alt="H"
                        src="/static/images/avatar/1.jpg"
                        className={classes.avatar}
                      />
                    </div>
                    <div className={classes.secondPart}>
                      <div className={classes.horizontalTwo}>
                        <span>
                          <strong>{review.title}</strong>
                        </span>
                        <Rating
                          name="read-only"
                          value={review.stars}
                          readOnly
                          className={classes.rating}
                        />
                      </div>
                      <span className={classes.date}>
                        {review.posting_date}
                      </span>
                      <br />
                      <span>{review.comment}</span>
                    </div>
                  </div>
                  <Divider
                    variant="middle"
                    style={{ marginTop: "10px", height: "3px" }}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <InputArea user_id={user_id} movie_id={movie_id} />
      </div>
    </div>
  );
}
