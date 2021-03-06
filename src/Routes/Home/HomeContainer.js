import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };
  //컴포넌트가 마운트됬을때 찾음

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upComing },
      } = await moviesApi.upComing();

      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      ></HomePresenter>
    );
  }
}
