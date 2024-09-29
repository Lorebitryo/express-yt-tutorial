const express = require('express')
const app = express()
const students = require('./students')

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

app.use('/student', students)

app.listen(3000, () => {
    console.log('server started!');
})