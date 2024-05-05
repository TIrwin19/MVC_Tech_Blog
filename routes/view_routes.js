const view_router = require('express').Router()
const view_controller = require('../controllers/view_controller')

function isAuth(req, res, next) {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }

    next()
}

// Landing page
view_router.get('/', view_controller.landingView)
// Dashboard page
view_router.get('/dashboard', isAuth, view_controller.dashboardView)
// Comment page
// view_router.get('/comments/:id', isAuth, view_controller.commentView)
// Login page
view_router.get('/login', view_controller.loginView)
// Register page
view_router.get('/register', view_controller.registerView)
// Logout
view_router.get('/logout', isAuth, view_controller.logout)

module.exports = view_router