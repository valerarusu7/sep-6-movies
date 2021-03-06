import React from "react";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import styles from "../../../styles/Review.module.css";

export default function ReviewContent({ reviews, nickname }) {
  const getName = (review) => {
    return review.nickname !== null ? review.nickname : "Anonymous";
  };

  return (
    <div className={styles.root}>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews.</p>
      ) : (
        <>
          {reviews.map((review) => {
            return (
              <div key={review.user_id}>
                <div className={styles.horizontal}>
                  <div className={styles.avatarContent}>
                    <Avatar
                      alt={getName(review)}
                      src="/static/images/avatar/1.jpg"
                      className={styles.avatar}
                      style={{ background: `${review.color}` }}
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
                      <span className={styles.nickname}>{getName(review)}</span>
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
