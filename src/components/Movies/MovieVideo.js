import React from "react";

const MovieVideo = ({ video }) => {
  return (
    <div>
      <iframe
        width="400px"
        height="220px"
        src={`https://www.youtube.com/embed/${video.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${video.name}`}
      />
    </div>
  );
};

export default MovieVideo;
