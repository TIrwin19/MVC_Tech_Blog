const User = require('./user')
const Post = require('./blog_post')
const Comment = require('./comment')

Post.belongsTo(User, {foreignKey: "user_id"})
User.hasMany(Post, {foreignKey: "user_id"})
Comment.belongsTo(User, {foreignKey: "user_id"})
User.hasMany(Comment, {foreignKey: "user_id"})
Comment.belongsTo(Post, {foreignKey: 'postId'})
Post.hasMany(Comment, {foreignKey: 'postId'})


module.exports = {
  User,
  Post,
  Comment
}