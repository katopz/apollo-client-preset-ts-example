import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// Example query from https://www.graph.cool/
const MOVIE_QUERY = gql`
{
  Movie(id: "cixos5gtq0ogi0126tvekxo27") {
    id
    title
    actors {
       name
    }
  }
}
`;

const withService = graphql<Response>(MOVIE_QUERY);
export default withService(({ data }) => {
  if (data && data.loading) { return <p>loading...</p>; }

  // Do something with your data
  return <pre>{JSON.stringify(data)}</pre>;
});
