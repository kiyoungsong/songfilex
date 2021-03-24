import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      vidoes: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let vidoes = null;
    let cast = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        const temp = await moviesApi.video(parsedId);
        vidoes = temp.data.results;
        const tempCast = await moviesApi.cast(parsedId);
        cast = tempCast.data.cast;
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        const temp = await tvApi.video(parsedId);
        vidoes = temp.data.results;
        const tempCast = await tvApi.cast(parsedId);
        cast = tempCast.data.cast;
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, vidoes, cast });
    }
  }

  render() {
    const { cast, vidoes, result, error, loading } = this.state;
    return (
      <>
        <DetailPresenter
          cast={cast}
          videos={vidoes}
          result={result}
          error={error}
          loading={loading}
        ></DetailPresenter>
      </>
    );
  }
}
