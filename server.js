import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const tasks = [
  { id: 1, title: 'Sample Task', status: 'pending' }
];

// Only GET and POST implemented. Missing PUT and DELETE entirely.
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

// Missing: PUT /api/tasks/:id
// Missing: DELETE /api/tasks/:id
// Missing: Error handler middleware
// Missing: Modular architecture (everything in server.js)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
}

export default app;
