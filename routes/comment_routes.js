const router = require('express').Router()
const comment_controller = require('../controllers/comment_controller')

// Save comment to database
router.post('/comment', comment_controller.saveCommentToDb)

module.exports = router

// router.post('/comment', async (req, res) => {
//   try {
//     const { comment, postId } = req.body;
//     const user_id = req.session.user_id; // Rename the variable to user_id

//     // Create a new comment in the database
//     const newComment = await Comment.create({
//       comment: comment,
//       user_id: user_id, // Use user_id here
//       postId: postId
//     })

//     // Fetch the user associated with the new comment
//     const user = await User.findOne({ where: { id: user_id } }); // Use user_id here

//     // Construct the response object with the new comment data and user information
//     const responseData = {
//       id: newComment.id,
//       comment: newComment.comment,
//       createdAt: newComment.createdAt,
//       user: {
//         id: user.id,
//         username: user.username
//       }
//     }

//     // Send the response with the newly created comment data
//     res.status(201).json(responseData)
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ message: 'Internal server error' })
//   }
// })
