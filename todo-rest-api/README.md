# To-Do REST API

Node.js + Express + MongoDB (Mongoose).

## Run

```bash
npm install
npm run dev
```

Needs MongoDB running locally. The default connection string is in `.env`
(copy of `.env.example`). To use MongoDB Atlas, paste your Atlas URI into `MONGO_URI`.

## Endpoints

| Method | URL | What it does |
| --- | --- | --- |
| POST | /api/tasks | Add a task |
| GET | /api/tasks | List tasks (`?completed=true` or `false` to filter) |
| GET | /api/tasks/:id | Get one task |
| PUT / PATCH | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

Task fields: `title` (required, max 120 chars), `description`, `completed` (default false).

## Test in Postman

Import `postman/todo-api.postman_collection.json`, then run the requests from top to bottom.
"Create task" saves the new id automatically, so the other requests just work.
