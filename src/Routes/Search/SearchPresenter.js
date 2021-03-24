import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm,
}) => (
  <>
    <Helmet>
      <title>Search | Songfilx</title>
    </Helmet>
    {
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Search Movies or TV Shows..."
            value={searchTerm}
            onChange={updateTerm}
          ></Input>
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResult && movieResult.length > 0 && (
              <Section
                title="Movie Result"
                nowPlaying={movieResult}
                isMovie={true}
              ></Section>
            )}
            {tvResult && tvResult.length > 0 && (
              <Section
                title="TV Show Result"
                nowPlaying={tvResult}
                isMovie={false}
              ></Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
            {tvResult &&
              movieResult &&
              tvResult.length === 0 &&
              movieResult.length === 0 && (
                <Message text="Nothing found for" color="#95a5a6" />
              )}
          </>
        )}
      </Container>
    }
  </>
);

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
