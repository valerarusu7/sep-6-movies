import React from "react";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import styles from "../../styles/Review.module.css";
import { useSelector } from "react-redux";

export default function ReviewContent({ reviews, user_info }) {
  const { user } = useSelector((state) => state.auth);

  const getName = () => {
    return user_info.nickname !== null ? user_info.nickname : user.displayName;
  };
  return (
    <div className={styles.root}>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews.</p>
      ) : (
        <>
          {reviews.map((review) => {
            return (
              <div key={review.movie_id}>
                <div className={styles.horizontal}>
                  <div className={styles.avatarContent}>
                    <Avatar
                      alt={getName()}
                      src="/static/images/avatar/1.jpg"
                      className={styles.avatar}
                      style={{ background: `${user_info.color}` }}
                    />
                  </div>
                  <div className={styles.secondPart}>
                    <div className={styles.horizontalTwo}>
                      <span>
                        <strong>{review.title}</strong>
                      </span>
                      <Rating
                        name="read-only"
                        value={review.stars}
                        readOnly
                        className={styles.rating}
                      />
                    </div>
                    <div className={styles.horizontalTwo}>
                      <span className={styles.nickname}>
                        {review.movie_name}
                      </span>
                      <span className={styles.date}>{review.posting_date}</span>
                    </div>

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
  );
}
