const router = require('express').Router()
const createError = require('http-errors')

const us = [
    {
        name: '김김김',
        age: 14
    },
    {
        name: '이이이',
        age: 24
    }
]

router.get('/', function(req, res, next) {
    console.log(req.query)
    console.log(req.body)

    res.send({ users: us })
})

router.post('/', (req, res, next) => {
    console.log(req.query)
    console.log(req.body)
    res.send({ success: true, msg: 'post ok' })
})

router.put('/', (req, res, next) => {
    console.log(req.query)
    console.log(req.body)
    res.send({ success: true, msg: 'put ok' })
})

router.delete('/', (req, res, next) => {
    console.log(req.query)
    console.log(req.body)
    res.send({ success: true, msg: 'del ok' })
})

router.all('*',function(req,res,next){
    next(createError(503,'그런 API 없어'))
})

module.exports = router