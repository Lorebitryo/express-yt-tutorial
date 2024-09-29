const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Students page')
})

router.get('/detail', (req, res) => {
    res.send('Students detail page')
})

module.exports = router