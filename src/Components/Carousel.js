import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  padding-bottom: 30px;
`;

const MainSlider = styled.div`
  position: relative;
`;

const SubSlider = styled.div`
  position: absolute;
  bottom: 1%;
  width: 100%;
  z-index: 1;
`;

const MainImg = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: ${(props) => (props.thumb ? "20vh" : "calc(100vh - 50px);")};
  z-index: -1;
  padding: 0px 70px;
  padding-top: 50px;
`;

const SubImg = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  height: 200px;
  &:hover {
    border: 5px solid white;
  }
`;

const MainTitle = styled.div`
  position: relative;
  top: 40%;
  width: 50%;
  font-size: 72px;
`;

const SubContent = styled.span`
  position: relative;
  top: 45%;
  width: 50%;
  font-size: 40px;
`;

const OverView = styled.div`
  position: relative;
  top: 50%;
  width: 50%;
  font-size: 20px;
`;

const SubTitle = styled.div`
  position: relative;
  font-size: 24px;
  top: 80%;
  left: 5%;
`;

const Item = styled.div`
  padding: ${(prop) => prop.thumb};
  margin: 0px;
  &:focus {
    outline: none;
  }
`;

const DetailTxt = styled.div`
  position: relative;
  padding-left: 5px;
  font-size: 65px;
  left: 90%;
  top: 40%;
  background-color: gray;
  opacity: 0.65;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  text-align: center;
  line-height: 60px;
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Container>
        <MainSlider>
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            arrows={false}
          >
            {this.props.nowPlaying.map((content, index) => (
              <Item key={index} thumb={"0"}>
                <MainImg
                  thumb={false}
                  bgUrl={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
                >
                  <MainTitle>
                    {this.props.isMovie ? content.title : content.name}
                  </MainTitle>
                  <SubContent>
                    {this.props.isMovie
                      ? content.release_date.substring(0, 4)
                      : content.first_air_date.substring(0, 4)}
                  </SubContent>
                  <SubContent>{` • 🌟 ${content.vote_average}/10`}</SubContent>
                  <OverView>{content.overview}</OverView>
                  <Link
                    to={
                      this.props.isMovie
                        ? `/movie/${content.id}`
                        : `/tv/${content.id}`
                    }
                  >
                    <DetailTxt>{`>`}</DetailTxt>
                  </Link>
                </MainImg>
              </Item>
            ))}
          </Slider>
        </MainSlider>
        <SubSlider>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            centerMode={true}
            autoplay={false}
            autoplaySpeed={5000}
            responsive={[
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {this.props.nowPlaying.map((content, index) => (
              <Item key={index} thumb={"10px"}>
                <SubImg
                  key={content.id}
                  thumb={true}
                  bgUrl={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
                >
                  <SubTitle>
                    {this.props.isMovie
                      ? content.title.slice(0, 30)
                      : content.name.slice(0, 30)}
                  </SubTitle>
                </SubImg>
              </Item>
            ))}
          </Slider>
        </SubSlider>
      </Container>
    );
  }
}

Carousel.propTypes = {
  nowPlaying: PropTypes.array,
};
