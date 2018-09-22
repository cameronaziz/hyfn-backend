const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLFloat } = require('graphql')
const types  = require('./types');
const data = require('./data');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ad: {
      type: types.Ad,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        const ad = data.ads.find(element => element.id.toString() === args.id);
        const details = data.adDetails.find(element => element.remote_id === ad.remote_id);
        return Object.assign({}, ad, details);
      }
    },
    adsDetails: {
      type: new GraphQLList(types.Ad),
      resolve() {
        const ads = [];
        for (ad of data.ads) {
          const details = data.adDetails.find(element => element.remote_id === ad.remote_id);
          ads.push(Object.assign({}, ad, details));
        }
        return ads;
      }
    },
    ads: {
      type: new GraphQLList(types.Ad),
      args: {
        id: { type: GraphQLString }
      },
      resolve() {
        return data.ads;
      }
    }
  }
})
const schema = new GraphQLSchema({
  query: RootQuery
})

module.exports = schema;