import express from "express"
import cors from 'cors'
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// --- Static todo list ---
const todos = [
  { id: 1, title: "Buy groceries",       description: "Milk, eggs, bread, and butter",         completed: false },
  { id: 2, title: "Walk the dog",         description: "30-minute walk around the park",         completed: true  },
  { id: 3, title: "Read a book",          description: "Finish reading Atomic Habits",            completed: false },
  { id: 4, title: "Write unit tests",     description: "Cover all edge cases in the auth module", completed: false },
  { id: 5, title: "Call the dentist",     description: "Schedule a check-up appointment",         completed: true  },
  { id: 6, title: "Plan weekend trip",    description: "Research hotels and activities in Goa",   completed: false },
  { id: 7, title: "Clean the apartment",  description: "Vacuum, mop floors, and do laundry",      completed: true  },
  { id: 8, title: "Learn TypeScript",     description: "Complete the TypeScript handbook",         completed: false },
  { id: 9, title: "Update resume",        description: "Add recent projects and skills",           completed: false },
  { id: 10, title: "Cook dinner",         description: "Try the new pasta carbonara recipe",       completed: true  },
];

// Helper – wrap a todo object in the required envelope
const wrap = (todo) => ({ todo });

// --- Route 1: GET /todos/random ---
// Returns a randomly selected todo
app.get("/todos/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * todos.length);
  res.json(wrap(todos[randomIndex]));
});

// --- Route 2: GET /todos?id=n ---
// Returns the todo whose id matches the query parameter
app.get("/todos", (req, res) => {
  const { id } = req.query;

  // id query param is required
  if (id === undefined) {
    return res.status(400).json({
      error: "Missing query parameter: id",
      usage: "GET /todos?id=<number>",
    });
  }

  const numericId = Number(id);

  if (!Number.isInteger(numericId) || numericId <= 0) {
    return res.status(400).json({
      error: "Query parameter 'id' must be a positive integer",
    });
  }

  const todo = todos.find((t) => t.id === numericId);

  if (!todo) {
    return res.status(404).json({
      error: `No todo found with id ${numericId}`,
    });
  }

  res.json(wrap(todo));
});

// --- 404 catch-all ---
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    availableRoutes: [
      "GET /todos/random",
      "GET /todos?id=<number>",
    ],
  });
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`  Random todo : GET http://localhost:${PORT}/todos/random`);
  console.log(`  Todo by id  : GET http://localhost:${PORT}/todos?id=3`);
});