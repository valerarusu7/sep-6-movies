import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

const AllMovies = ({ person, styles }) => {
  return (
    <React.Fragment>
      {person !== null || undefined
        ? person.all_movies.map((movie) => (
            <div className={styles.history}>
              <Timeline className={styles.timeline} s align="alternate">
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography className={styles.time}>
                      {movie.release_date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography className={styles.history}>
                      {movie.original_title}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          ))
        : null}
    </React.Fragment>
  );
};

export default AllMovies;
