
const express = require("express")
const app= express();
const port = 4000

app.get('/', (req, res) => res.send('Tom'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/contrack', (req, res) => res.send('ติดต่อเรา'))
app.get('/test', (req, res) => {
    res.json({message : "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
