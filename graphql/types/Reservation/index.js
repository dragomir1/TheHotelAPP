export default `
    type Reservation {
      _id: String!
      firstName: String!
      lastName: String!
      email: String!
    }

    type Query {
      reservation(_id: ID!): Reservation!
      reservations: [Reservation!]!
    }

    type Mutation {
      createReservation
            (
            firstName: String!,
            lastName: String!,
            email: String!
            ): Reservation!
      updateReservation
            (
            firstName: String!,
            lastName: String!,
            email: String!,
            ): Reservation!
      deleteReservation
            (
            email: String!
            ): Reservation!
    }

`;
