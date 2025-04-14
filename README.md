## Deployed Application

You can access the deployed backend at the following URL:

[Phonebook Backend](https://phonebook-backend-k655.onrender.com)  
# 📞 Phonebook Backend (Exercises 3.1–3.11)

This project is a backend implementation of a phonebook application built using **Node.js** and **Express** as part of the [Fullstack Open](https://fullstackopen.com/en/) course. The app provides a simple REST API for managing phonebook entries, with support for CRUD operations, middleware logging, error handling, and production deployment.

## 📁 Contents

This backend covers the following exercises:

- **3.1–3.6:** Basic Express server, JSON responses, route handling, and POST validation
- **3.7–3.8:** Logging with Morgan (including custom tokens for POST data)
- **3.9:** Connecting backend with the frontend from Part 2
- **3.10:** Deploying the backend to the web
- **3.11:** Serving the frontend from the backend (full stack integration)


## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ashrafi4544/phonebook-backend


Run in development mode
bash
Copy code
npm run dev
This uses Nodemon to auto-restart the server when changes are saved.

Start the server
bash
Copy code
npm start
Runs the app on http://localhost:3001.

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/persons	Get all phonebook entries
GET	/info	Get info page with entry count/time
GET	/api/persons/:id	Get a single phonebook entry
DELETE	/api/persons/:id	Delete a phonebook entry
POST	/api/persons	Add a new entry with validations
