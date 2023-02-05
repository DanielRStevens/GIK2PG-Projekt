const express = require('express');
const app = express();
const port = 4000;


app
.use(express.json())
.use(express.urlencoded({extended: false}))
.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-ALlow-Headers", "*");
  res.header("Access-Control-ALlow-Methods", "*");

  next();
});

app.get('/home')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})