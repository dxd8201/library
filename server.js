import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.forgottenrunes.com/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = 'your-authorization-token';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

import { gql } from '@apollo/client';

const GET_TOKEN_METADATA = gql`
  query getTokenMetadata($tokenId: String!) {
    token(id: $tokenId) {
      metadata {
        name
        description
        image
        attributes {
          trait_type
          value
        }
      }
    }
  }
`;

import { useQuery } from '@apollo/client';

const TokenMetadata = ({ tokenId }) => {
  const { loading, error, data } = useQuery(GET_TOKEN_METADATA, {
    variables: { tokenId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, description, image, attributes } = data.token.metadata;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <ul>
        {attributes.map(({ trait_type, value }) => (
          <li key={trait_type}>
            <strong>{trait_type}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};