import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ style, sliderMovies }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className={style.slider__container}
      style={{ marginBottom: 40, marginTop: 70 }}
    >
      <Slider {...settings} className={style.slider}>
        {sliderMovies.map((movie) => {
          return (
            <div key={movie.id} className={style.container_image}>
              <Link className={style.poster} to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                  className={style.img}
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
