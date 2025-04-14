const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

morgan.token('body', (req) => {
  if (req.method === 'POST') {
    const { name, number } = req.body;
    return `{name: ${name}, number: ${number}}`;
  }
  return '';
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(p => Number(p.id))) : 0;
  return String(maxId + 1);
};

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({ error: 'name or number is missing' });
  }
  if (persons.some(person => person.name === name)) {
    return res.status(400).json({ error: 'name must be unique' });
  }
  const newPerson = {
    id: generateId(),
    name,
    number
  };
  persons = persons.concat(newPerson);
  res.status(201).json(newPerson);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  const currentDate = new Date();
  const message = `Phonebook has info for ${persons.length} people <br> ${currentDate}`;
  res.send(message);
});

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = persons.find(p => p.id === id);
  if (!person) {
    return res.status(404).json({ error: 'person not found' });
  }
  res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  persons = persons.filter(p => p.id !== id);
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
