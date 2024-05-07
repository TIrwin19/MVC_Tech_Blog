const User = require('./user')
const Post = require('./blog_post')
const Comment = require('./comment')
// Foreign Id associations 
// User to Post association
Post.belongsTo(User, {foreignKey: "user_id"})
User.hasMany(Post, {foreignKey: "user_id"})
// User to comment association
Comment.belongsTo(User, {foreignKey: "user_id"})
User.hasMany(Comment, {foreignKey: "user_id"})
// Post to comment association
Comment.belongsTo(Post, {foreignKey: 'postId'})
Post.hasMany(Comment, {foreignKey: 'postId'})


module.exports = {
  User,
  Post,
  Comment
}