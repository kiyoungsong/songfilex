import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";
import Carousel from "Components/Carousel";

const Container = styled.div`
  padding: 20px;
`;

const Slider = styled.div``;

const Contents = styled.div``;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | Songfilx</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Slider>
          <Carousel nowPlaying={topRated} isMovie={false}></Carousel>
        </Slider>
        <Contents>
          {topRated && topRated.length > 0 && (
            <Section
              title="Top Rated Shows"
              nowPlaying={topRated}
              isMovie={false}
            ></Section>
          )}
          {popular && popular.length > 0 && (
            <Section
              title="Popular Show"
              nowPlaying={popular}
              isMovie={false}
            ></Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section
              title="Airing Today"
              nowPlaying={airingToday}
              isMovie={false}
            ></Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Contents>
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
