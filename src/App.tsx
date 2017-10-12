import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SERVICE_QUERY = gql`
{
  allServices {
    id
    name
    pingURL
  }
}
`;

const withService = graphql<Response>(SERVICE_QUERY);
export default withService(({ data }) => {
  console.log(data);

  return <p>OK</p>;
});
