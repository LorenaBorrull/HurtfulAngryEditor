const express = require('express');
// Pair programming
// Aqui si que podem escriure jejeje
const calcularIva = require('./refactorMal')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Bootcamp!<br><img src="https://somoscoders.org/user/images/rt_horizon/IMG-20181003-WA0005.jpeg"/>')
});

app.listen(3000, () => {
  console.log('server started');
});
