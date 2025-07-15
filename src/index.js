const express = require('express');
const {PORT} =  require("./config/index.js");


const app = express();




app.listen(PORT, () => {
    console.log(`Successfully started the server on http://localhost:${PORT} `)
})


