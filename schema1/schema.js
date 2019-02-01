const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;
// const Reservation = require('../models/Reservation');
const _ = require('lodash');

const reservations = [
  {id: 1, firstName: "bob", arrivalDate: "1/2/19"},
  {id: 2, firstName: "sam", arrivalDate: "06/22/19"}
]

const ReservationType = new GraphQLObjectType({
  name: 'Reservation',
  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString},
    location: {type: GraphQLString},
    arrivalDate: {type: GraphQLString},
    departureDate: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    reservation: {
      type: ReservationType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return _.find(reservations, {id: args.id});
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
