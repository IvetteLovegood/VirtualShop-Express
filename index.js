"use strict";

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/hello/:name', (req, res)=> {
    res.send({message: `Hello World ${req.params.name}`})
})

app.listen(3000, () => {
  console.log(`API RESTFUL ok en: http://localhost:${port}`);
});
