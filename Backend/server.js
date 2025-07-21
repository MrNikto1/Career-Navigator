// server.js
const app = require('./app'); // это правильно, если app.js существует
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

