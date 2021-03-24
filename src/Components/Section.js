import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Poster from "Components/Poster";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 마지막 차일드에게 마진을 안주고싶을때
const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <span
      className="priv_arrow"
      style={{
        position: "absolute",
        bottom: "58%",
        right: "-15px",
        color: "#fff",
        width: "25px",
        height: "25px",
        textAlign: "center",
        lineHeight: "40px",
        display: "inline-block",
        fontSize: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i>{`>`}</i>
    </span>
  );
}

function PreArrow(props) {
  const { onClick } = props;
  return (
    <span
      className="priv_arrow"
      style={{
        position: "absolute",
        bottom: "58%",
        left: "-15px",
        color: "#fff",
        width: "25px",
        height: "25px",
        textAlign: "center",
        lineHeight: "40px",
        display: "inline-block",
        fontSize: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i>{`<`}</i>
    </span>
  );
}

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 13,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 10,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Section = ({ title, nowPlaying, isMovie }) => (
  <Container>
    <Title>{title}</Title>
    {nowPlaying && nowPlaying.length > 0 && (
      <Slider {...settings}>
        {nowPlaying.map((movie) => (
          <>
            <Poster
              key={movie.id}
              id={movie.id}
              title={isMovie ? movie.original_title : movie.original_name}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={isMovie}
              year={() =>
                isMovie
                  ? movie.release_date.substring(0, 4)
                  : movie.first_air_date.substring(0, 4)
              }
            ></Poster>
          </>
        ))}
      </Slider>
    )}
  </Container>
);

Section.prototyps = {
  title: PropTypes.string.isRequired,
};

export default Section;
