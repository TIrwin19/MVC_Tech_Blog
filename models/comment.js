const { Model, DataTypes } = require('sequelize')

const client = require('../config/connections')
const Post = require('./blog_post')
const User = require('./user')

class Comment extends Model{}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
  },
  {
    sequelize: client,
    timestamps: true,
    modelName: 'comment'
  }
)

module.exports = Comment