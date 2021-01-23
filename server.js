const espress = require('express')
const app = express()
 const PORT = 3000
 
 app.get('/', (req, res) => {
        res.send('May the force be with you!')
 })

 app.listen(PORT, () => {
     console.log(`Server lisetning on http://localhost:${PORT}`)
 })