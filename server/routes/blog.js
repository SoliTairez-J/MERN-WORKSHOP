const express = require("express")
const { requireLogin } = require("../controllers/authController")
const router = express.Router()
const {create,getAllblogs,singleBlog,remove,update} = require("../controllers/blogController")

router.post('/create',requireLogin,create)
//การเรียกใช้งาน
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)

router.delete('/blog/:slug',requireLogin,remove)
router.put('/blog/:slug',requireLogin,update)

module.exports = router