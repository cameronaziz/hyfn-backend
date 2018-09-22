const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql')

const Ad= new GraphQLObjectType({
  name: 'Ad',
  fields: () => ({
    id: { type: GraphQLString },
    remoteId: {
      type: GraphQLString,
      resolve(parent) {
        return parent.remote_id
      }
    },
    frequency: { type: GraphQLFloat },
    spend: { type: GraphQLFloat },
    cpm: { type: GraphQLFloat },
    ctr: { type: GraphQLFloat },
    costPerInlineLinkClick: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent.cost_per_inline_link_click
      }
    },
    goal: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent['actions:goal']
      }
    },
    linkClick: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent['actions:link_click"']
      }
    },
    costPerGoal: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent['cost_per_action_type:cost_per_goal']
      }
    },
    offsiteConversion: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent['actions:offsite_conversion']
      }
    },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    reach: { type: GraphQLInt },
  })
})

module.exports = Ad;