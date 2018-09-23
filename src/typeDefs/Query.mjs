import Apollo from 'apollo-server';

const Query = Apollo.gql`
  type Query {
    ad: Ad
    ads: [Ad]
    adsDetails: [Ad]
  }
`;

export default Query;