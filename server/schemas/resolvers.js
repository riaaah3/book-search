const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {

        return User.find({});
      }
      throw AuthenticationError
    },

  },
  Mutation: {
    createUser: async (parent, args) => {
      const userData = await User.create(args);
      const token = signToken(userData);
      return { token, userData };
    },
    addBook: async (parent, args, context) => {
      if (context.user) {

        const updateBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: { ...args } } },
          { new: true }
        );
        return vote;
      }
      throw AuthenticationError
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };

    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {

        const updateBooks = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return vote;
      }
      throw AuthenticationError
    },

  },

};

module.exports = resolvers;
