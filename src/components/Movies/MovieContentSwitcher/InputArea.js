import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { addReview } from "../../../store/reducers/movieReducer";
import Button from "@material-ui/core/Button";
import { IoMdSend } from "react-icons/io";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "90%",
      display: "flex",
      marginLeft: "5%",
    },
  },
  multiline: {
    background: "rgb(31, 32, 48)",
    color: "white",
  },
}));

export default function InputArea({ uid, movie_id, movie_name }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [errorMessage, setErrorMessage] = useState("");
  const { have_review } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const createReview = () => {
    setErrorMessage("");
    setTitle("");
    setComment("");
    setRating(5);
    dispatch(addReview(uid, movie_id, movie_name, title, comment, rating));
  };

  const checkInputFields = () => {
    if (title.length < 3) {
      setErrorMessage("Title should be at least 3 characters");
    } else if (comment.length < 6) {
      setErrorMessage("Comment should be at least 6 characters");
    } else {
      createReview();
    }
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Title"
        style={{ marginLeft: "5%" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputProps={{
          style: { color: "#FFFFFF" },
        }}
        InputLabelProps={{
          style: { color: "grey" },
        }}
      />
      <div className={classes.root}>
        <TextField
          id="filled-textarea"
          label="Add review"
          placeholder="Write your review here"
          multiline
          rows="5"
          variant="filled"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          InputProps={{
            className: classes.multiline,
          }}
          InputLabelProps={{
            style: { color: "grey" },
          }}
        />
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          marginLeft: "5%",
          marginTop: "10px",
        }}
      >
        <p style={{ color: "red" }}>{errorMessage}</p>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          style={{ marginRight: "20px", marginLeft: "auto", color: "red" }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<IoMdSend />}
          onClick={() => checkInputFields()}
          disabled={have_review}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
