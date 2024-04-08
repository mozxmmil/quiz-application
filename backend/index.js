import express from "express";
import { questions } from "./question.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all questions
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// Endpoint to check answers
app.post("/api/submit", (req, res) => {
  const answers = req.body;
  console.log(answers)
  let score = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.answer) {
      score++;
    }
  });
  res.json({ score: `${score}/${questions.length}` });
});

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
