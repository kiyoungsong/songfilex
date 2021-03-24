import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import Actor from "Components/Actor";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  height: 20%;
  margin-left: 50px;
`;

const Title = styled.h3`
  font-size: 64px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
`;

const Item = styled.span`
  margin-left: 10px;
  font-size: 24px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const OverView = styled.p`
  font-size: 20px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
  margin-left: 10px;
`;

const VideoFrame = styled.div`
  position: relative;
  display: flex;
  bottom: -20%;
  margin-left: 45px;
  padding: 10px;
  height: 300px;
  bottom: -11%;
`;

const VideoContainer = styled.div`
  position: relative;
  bottom: -70px;
  left: -8%;
  display: flex;
`;

const ContentContainer = styled.div``;

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
  slidesToShow: 8,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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

const SubTitle = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 50px;
`;

const ActorContainer = styled.div`
  position: relative;
  overflow: hidden;
  bottom: -20%;
  margin-left: 45px;
  padding: 10px;
  width: 1500px;
  height: 300px;
  @media screen and (max-width: 1300px) {
    width: 1300px;
  }
  @media screen and (max-width: 1024px) {
    width: 1024px;
  }
  @media screen and (max-width: 600px) {
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;

const DetailPresenter = ({ cast, videos, result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Songfilx</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
          | Songfilx
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <ContentContainer>
          <Data>
            <Title>
              {console.log({ videos })}
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime
                  ? `${result.runtime} min`
                  : `${result.episode_run_time} min`}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
            </ItemContainer>
            <OverView>{result.overview}</OverView>
          </Data>

          <VideoFrame>
            <SubTitle>Trailer</SubTitle>
            <VideoContainer>
              {videos.map((video, index) => (
                <ReactPlayer
                  key={index}
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              ))}
            </VideoContainer>
          </VideoFrame>
          <ActorContainer>
            <SubTitle>Actors</SubTitle>
            <Slider {...settings}>
              {cast.map((actor, index) => (
                <Actor
                  key={index}
                  character={actor.character}
                  original_name={actor.original_name}
                  profile_path={actor.profile_path}
                ></Actor>
              ))}
            </Slider>
          </ActorContainer>
        </ContentContainer>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
