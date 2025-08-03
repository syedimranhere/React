import express from "express";
import cors from "cors";
const app = express();

app.use(express.static('dist'));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why do programmers hate nature? — It has too many bugs.",
    },
    {
      id: 2,
      joke: "Why do Java developers wear glasses? — Because they don't C#.",
    },
    {
      id: 3,
      joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    },
    {
      id: 4,
      joke: "There are only 10 kinds of people in the world — those who understand binary and those who don’t.",
    },
    {
      id: 5,
      joke: "Debugging: Being the detective in a crime movie where you are also the murderer.",
    },
  ];

  res.send(jokes);
});
app.listen(4000, () => {
  console.log("Listening on 4000");
});
