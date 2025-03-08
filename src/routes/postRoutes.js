const express = require('express')
const { getPosts } = require('../controllers/postController');

const postRoutes = express.Router()

postRoutes.get("/post", getPosts) 

module.exports = postRoutes;