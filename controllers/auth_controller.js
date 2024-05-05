const { User } = require('../models')

module.exports = {
  async registerUser(req, res) {
    try {
      const data = req.body
      const user = await User.create(data)

      req.session.user_id = user.id
      res.redirect('/dashboard')
    } catch (err) {
      console.log(err)
    }
  },

  async loginUser(req, res) {
    const { username, password } = req.body
    const user = await User.findOne({
      where: {
        username: username
      }
    })

    if (!user) return res.redirect('/register')

    const validate_pass = await user.validatePassword(password)

    if (!validate_pass) return res.redirect('/login/Invalid Password')

    req.session.user_id = user.id
    res.redirect('/')
  }
}