const router = require('express').Router()

const views = require('./view_routes')
const auth = require('./auth_routes')
const post = require('./dashboard_routes')
const comment =require('./comment_routes')

router.use('/', views, auth, post, comment)

module.exports = router