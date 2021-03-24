import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Carousel from "Components/Carousel";
import Helmet from "react-helmet";

const Container = styled.div``;

const Slider = styled.div``;

const Contents = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

//nowplaying의 값이 있으면 만드는 부분
const HomePresenter = ({ nowPlaying, upComing, popular, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Songfilx</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Slider>
          <Carousel nowPlaying={nowPlaying} isMovie={true}></Carousel>
        </Slider>
        <Contents>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section
              title="Now Playing"
              nowPlaying={nowPlaying}
              isMovie={true}
            ></Section>
          )}

          {popular && popular.length > 0 && (
            <Section
              title="Popular Movies"
              nowPlaying={popular}
              isMovie={true}
            ></Section>
          )}
          {upComing && upComing.length > 0 && (
            <Section
              title="Upcoming Movies"
              nowPlaying={upComing}
              isMovie={true}
            ></Section>
          )}

          {error && <Message color="#e74c3c" text={error} />}
        </Contents>
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
