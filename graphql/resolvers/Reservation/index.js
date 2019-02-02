import Reservation from '../../../models/Reservation';

export default {
  // Query: {
  //   reservation: (root, args) => {
  //     return new Promise((resolve, reject) => {
  //       Reservation.findOne(args).exec((err, res) => {
  //         err ? reject(err) : resolve(res);
  //       });
  //     });
  //   },
  //
  //   reservations: () => {
  //     return new Promise((resolve, reject) => {
  //       Reservation.find({})
  //         .populate()
  //         .exec((err, res) => {
  //           err ? reject(err) : resolve(res);
  //         });
  //     });
  //   }
  // },
  Query: {
    reservation: async (parent, { _id }, context, info) => {
      return await Reservation.findOne({ _id }).exec();
    },
    reservations: async (parent, args, context, info) => {
      const reservations = await Reservation.find({})
        .populate()
        .exec();

    //   return reservations.map(r => ({
    //     _id: r._id.toString(),
    //     firstName: r.firstName,
    //     lastName: r.lastName,
    //     email: r.email,
    //   }));
    }
  },

  Mutation: {
      createReservation: (root, { firstName, lastName, email }) => {
        const newReservation = new Reservation({ firstName, lastName, email });

        return new Promise((resolve, reject) => {
          newReservation.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      },

      // createReservation: async (parent, { reservation }, context, info) => {
      //       const newReservation = await new Reservation({
      //         firstName: reservation.firstName,
      //         lastName: reservation.lastName,
      //         email: reservation.email,
      //       });
      //       return new Promise((resolve, reject) => {
      //          newReservation.save((err, res) => {
      //            err ? reject(err) : resolve(res);
      //          });
      //        });
      //      },



      updateReservation: (root, { firstName, lastName, email }) => {
        return new Promise((resolve, reject) => {
          Reservation.findOneAndUpdate({ id }, { $set: { firstName, lastName, mail } }).exec(
            (err, res) => {
              err ? reject(err) : resolve(res);
            }
          );
        });
      },
      // updateReservation: async (parent, { _id, reservation }, context, info) => {
      //       return new Promise((resolve, reject) => {
      //         Reservation.findByIdAndUpdate(_id, { $set: { ...reservation } }, { new: true }).exec(
      //           (err, res) => {
      //             err ? reject(err) : resolve(res);
      //           }
      //         );
      //       });
      //     },


      deleteReservation: (root, args) => {
        return new Promise((resolve, reject) => {
          Reservation.findOneAndDelete(args).exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      }
    // deleteReservation: async (parent, { _id }, context, info) => {
    //   return new Promise((resolve, reject) => {
    //     Reservation.findByIdAndDelete(_id).exec((err, res) => {
    //       err ? reject(err) : resolve(res);
    //     });
    //   });
    // }
  }
};
