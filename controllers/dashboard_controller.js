const { Post, User } = require('../models')


module.exports = {
  async savePostToDb(req, res) {
    const {title, content} = req.body
  const user_id = req.session.user_id

  if(!title || !content) {
    return res.json({message: 'Title and content are required.'})
  }

  try{
    await Post.create({title, content, user_id})

    res.redirect('/dashboard')

  } catch (err) {
    console.error('Error creating post', err)
  }
  },

  async updatePost(req, res) {
    const {title, content, postId} = req.body

  try{
    const updatePost = await Post.update(
      {title, content},
      {where: {id: postId}}
    )
    console.log(postId)

    res.redirect('/dashboard')

  } catch (err){
    console.log(err)
  }
  },
  
  async deleteRoute(req, res) {
    const {postId} = req.body
  await Post.destroy({where: {id: postId}})

  res.redirect('/dashboard')
  }

}