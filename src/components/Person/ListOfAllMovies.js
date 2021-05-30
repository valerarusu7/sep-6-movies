import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";


const AllMovies = ({ person, styles }) => {
  return (
    <React.Fragment>
      {person !== null || undefined
        ? person.all_movies.map((movie) => (
            <div className={styles.history}>
              <Timeline className={styles.timeline} s align="alternate">
    <Link className={styles.click} to={`/movie/${movie.id}`} key={movie.id}>
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
                    <Paper className={styles.paper}>
                      <Typography variant="h6" component="h1">
                        <div className={styles.paper}>
                          <div className={styles.papertext}>
                            {movie.original_title}
                          </div>
                          <div>
                            <img
                              className={styles.timelineimage}
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt={person.details.id}
                            />
                          </div>
                        </div>
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem> </Link>
              </Timeline>
            </div>
          ))
        : null}
    </React.Fragment>
  );
};

export default AllMovies;
