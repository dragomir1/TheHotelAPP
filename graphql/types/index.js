import { mergeTypes } from 'merge-graphql-schemas';

import Reservation from './Reservation/';

const typeDefs = [Reservation];

export default mergeTypes(typeDefs);
