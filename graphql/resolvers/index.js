import { mergeResolvers } from "merge-graphql-schemas";

import Reservation from './Reservation/';

const resolvers = [Reservation];

export default mergeResolvers(resolvers);
