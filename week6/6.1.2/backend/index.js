const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

/* ---- Data source (single source of truth) ---- */
const TODOS = [
  { id: 1, title: "Go to the gym", description: "From 5-6" },
  { id: 2, title: "Do DSA", description: "2 questions" },
  { id: 3, title: "CS Class", description: "Complete homework" },
  { id: 4, title: "Read OS", description: "Process scheduling" },
  { id: 5, title: "Build React App", description: "Frontend work" },
  { id: 6, title: "Revise DBMS", description: "Normalization" },
  { id: 7, title: "Practice LeetCode", description: "Daily practice" }
];

/* ---- Utility ---- */
function generateTodos() {
  const count = Math.floor(Math.random() * TODOS.length) + 1;
  const shuffled = [...TODOS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/* ---- Routes ---- */

// get random list of todos
app.get("/", (req, res) => {
  res.status(200).json({
    todos: generateTodos()
  });
});

// get a specific todo by id
app.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const todo = TODOS.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.status(200).json({ todo });
});

/* ---- Server ---- */
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
