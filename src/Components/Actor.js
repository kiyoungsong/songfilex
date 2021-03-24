import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
`;

const Img = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  width: 160px;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

const Name = styled.span`
  display: block;
  margin-bottom: 3px;
`;
const CharName = styled.span`
  font-size: 10px;
`;

export default ({ character, original_name, profile_path }) => {
  return (
    <Container>
      <ImageContainer>
        <Img
          bgUrl={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : require("../assets/noPosterSmall.png").default
          }
        />
      </ImageContainer>
      <CharName>{character}</CharName>
      <Name>{original_name}</Name>
    </Container>
  );
};
