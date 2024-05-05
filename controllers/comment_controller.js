const {Comment, User, Post} = require('../models')

module.exports = {
  async saveCommentToDb(req, res) {
    try {
      const {comment, postId} = req.body
      const user = req.session.user_id
  
      await Comment.create({
        comment: comment, 
        user_id: user,
        postId: postId
      })
  
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  }
}