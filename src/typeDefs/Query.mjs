import gql from 'graphql-tag';

const Query = gql`
  type Query {
    ad: Ad
    ads: [Ad]
    adsDetails: [Ad]
  }
`;

export default Query;