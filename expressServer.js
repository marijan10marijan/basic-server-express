// Creating the server
const express = require('express')
const ourApp = express()

ourApp.use(express.urlencoded({ extended: false }))

// Making form on home route 
ourApp.get('/', (req, res) => {
    res.send(`
        <form action='/result' method='POST'>
            <h1>What is the biggest continent?</h1>
            <input type='text' name='continent' autocomplete='off'>
            <button>Submit answer</button>
        </form>
    `)
})

// Post method to display answer
ourApp.post('/result', (req, res) => {
    if (req.body.continent.toLowerCase() === 'africa') {
        res.send('Your answer is correct!')
    } else {
        res.send('Wrong! You failed.')
    }
})

// Start server on port 3000
ourApp.listen(3000)
