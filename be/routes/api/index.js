const router = require('express').Router()
const createError = require('http-errors')



router.use('/user', require('./user'))

router.all('*',function(req,res,next){
    next(createError(404,'404 eror!! 그런 API 없어!!'))
})

module.exports = router