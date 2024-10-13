const express = require('express')
const app = express()
const students = require('./students')
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgres@localhost:5432/test')

db.result('SELECT * from newtable')
  .then((data) => {
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })



const myDate = (req, res, next) => {
    req.date = new Date()
    console.log(new Date())
    next()
}

const myLog = (req, res, next) => {
    console.log("My log!")
}

app.get('/example', myDate)

app.route('/example')
    .get((req, res) => {
        res.send('Get method!' + req.date)
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