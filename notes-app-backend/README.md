# Notes App Backend

Node.js + Express + MongoDB (Mongoose) with JWT authentication.
Each user only sees and changes their own notes.

## Run

```bash
npm install
npm run dev
```

Needs MongoDB running locally. Settings are in `.env` (copy of `.env.example`).
Before deploying, change `JWT_SECRET` to your own long random string.

## Endpoints

Auth (open):

| Method | URL | What it does |
| --- | --- | --- |
| POST | /api/auth/register | Create an account, returns a token |
| POST | /api/auth/login | Log in, returns a token |

Notes (send `Authorization: Bearer <token>`):

| Method | URL | What it does |
| --- | --- | --- |
| POST | /api/notes | Create a note |
| GET | /api/notes | List your notes (`?search=word`, `?pinned=true`) |
| GET | /api/notes/:id | Get one note |
| PUT / PATCH | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

Note fields: `title` (required, max 120 chars), `content`, `pinned` (default false).

## Test in Postman

Import `postman/notes-api.postman_collection.json` and run the requests from top to bottom.
Register and Login save the token, and Create note saves the note id, so nothing needs copying.
