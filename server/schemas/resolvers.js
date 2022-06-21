const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // find ALL users
        users: async () => {
            return User.find();
        },
        // find ONE user
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        // find current logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findById({ _id: context.user._id });
            } 
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email');
            }
            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
    }
};

module.exports = resolvers;