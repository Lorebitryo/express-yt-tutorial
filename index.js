const express = require('express')
const app = express()
const students = require('./students')

const myDate = (req, res, next) => {
    console.log(new Date())
    next()
}

const myLog = (req, res, next) => {
    console.log("My log!")
}

app.use(myDate)

app.route('/')
    .get((req, res) => {
        res.send('Get method!')
    })
    .post((req, res) => {
        res.send('Post method!')
    })
    .put((req, res) => {
        res.send('Put method!')
    })
    .delete((req, res) => {
        res.send('Delete method!')
    })

app.use(myLog)

app.use('/student', students)

app.listen(3000, () => {
    console.log('server started!');
})