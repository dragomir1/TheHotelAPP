import Reservation from '../../../models/Reservation';

export default {
  Query: {
    reservation: (root, args) => {
      return new Promise((resolve, reject) => {
        Reservation.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },

    reservations: () => {
      return new Promise((resolve, reject) => {
        Reservation.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },

  Mutation: {
      addReservation: (root, { firstName, lastName, email }) => {
        const newReservation = new Reservation({ firstName, lastName, email });

        return new Promise((resolve, reject) => {
          newReservation.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      },
      editReservation: (root, { firstName, lastName, email }) => {
        return new Promise((resolve, reject) => {
          Reservation.findOneAndUpdate({ id }, { $set: { firstName, lastName, mail } }).exec(
            (err, res) => {
              err ? reject(err) : resolve(res);
            }
          );
        });
      },
      deleteReservation: (root, args) => {
        return new Promise((resolve, reject) => {
          Reservation.findOneAndRemove(args).exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });
      }
    }
}
