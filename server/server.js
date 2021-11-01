const express = require('express')
const app = express();
const port = 3080;

app.get('/api', (req, res) =>{
    res.json({message: "Hello from server!"});
})

app.listen(port, () =>{
    console.log('Example app listening at http://localhost:3080');
})
