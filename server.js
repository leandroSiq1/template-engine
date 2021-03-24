const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("index", {
    title: "Atalan | Home"
  });
});

app.use((req, res) => {
  res.send("Página não encontrada!");
});


// exec server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});