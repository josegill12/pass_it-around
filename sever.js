const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>99 Bottles of Beer on the Wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);

  if (numberOfBottles === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall.</h1>
      <a href="/">Start Over</a>
    `);
  } else {
    const nextBottleCount = numberOfBottles - 1;
    const nextHref = nextBottleCount === 0 ? "/" : `/${nextBottleCount}`;
    const bottleText = numberOfBottles === 1 ? "bottle" : "bottles";

    res.send(`
      <h1>${numberOfBottles} ${bottleText} of beer on the wall.</h1>
      <a href="${nextHref}">Take one down, pass it around</a>
      <br>
      <a href="/">Start Over</a>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
