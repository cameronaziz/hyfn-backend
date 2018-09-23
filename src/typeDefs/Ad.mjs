import gql from 'graphql-tag';

const Ad = gql`
  type Ad {
    id: String
    remoteId: String
    name: String
    status: String
    frequency: Float
    spend: Float
    cpm: Float
    ctr: Float
    costPerInlineLinkClick: Float
    linkClick: Float
    costPerGoal: Float
    offsiteConversion: Float
    reach: Float
    goal: Float
  }
`;

export default Ad;