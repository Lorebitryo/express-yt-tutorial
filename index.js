const express = require('express')
const app = express()

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


app.listen(3000, () => {
    console.log('server started!');
})