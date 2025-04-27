const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Currency Tracker works!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
