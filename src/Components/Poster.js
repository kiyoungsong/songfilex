import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 15px;
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const Detail = styled.span`
  font-size: 15px;
  position: absolute;
  bottom: 50%;
  right: 30px;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
    ${Detail} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require("../assets/noPosterSmall.png").default
        }
      />
      <Rating>
        <span role="img" aria-label="rating">
          ⭐
        </span>{" "}
        {rating}/10
      </Rating>
      <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Detail>View detail</Detail>
      </Link>
    </ImageContainer>
    <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
    <Year>{year}</Year>
  </Container>
);

Poster.prototype = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string.isRequired,
  isMovie: PropTypes.bool,
};

export default Poster;
