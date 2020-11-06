const mongoose = require('mongoose');

// Creation of User schema
const UserSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      required: true
    },
    providerId: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String
    },
    displayName: {
      type: String
    },
    avatar: {
      type: String
    },
    isDeveloper: {
      type: Boolean,
      default: false
    },
    notifications: [{ type: String }],
    notificationSettings: {
      likedPost: {
        type: Boolean,
        default: true
      },
      likedSolution: {
        type: Boolean,
        default: true
      },
      newSolution: {
        type: Boolean,
        default: true
      },
      updatedPost: {
        type: Boolean,
        default: true
      },
      updatedSolution: {
        type: Boolean,
        default: true
      }
    },
    // Reference to document in the Post collection to allow populate method to be used
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution' }]
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
