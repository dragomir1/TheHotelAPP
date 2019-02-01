export default `
    type Reservation {
      firstName: String!
      lastName: String!
      email: String!
      id: ID!
    }

    type Query {
      reservation(email: String!): Reservation
      reservations: [Reservation]!
    }

    type Mutation {
      addReservation
            (
            firstName: String!,
            lastName: String!,
            email: String!
            ): Reservation!
      editReservation
            (
            firstName: String!,
            lastName: String!,
            email: String!,
            ): Reservation!
      deleteReservation
            (
            id: ID!
            email: String!
            ): Reservation!
    }

`;
