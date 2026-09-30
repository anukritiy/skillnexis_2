# User Authentication API

Node.js + Express + MongoDB (Mongoose), with bcrypt password hashing and JWT login.

## Run

```bash
npm install
npm run dev
```

Needs MongoDB running locally. Settings are in `.env` (copy of `.env.example`).
Before deploying, change `JWT_SECRET` to your own long random string.

## Endpoints

| Method | URL | What it does |
| --- | --- | --- |
| POST | /api/auth/register | Create an account, returns a token |
| POST | /api/auth/login | Log in, returns a token |
| GET | /api/auth/me | Get your profile (needs `Authorization: Bearer <token>`) |

## How it works

- Passwords are hashed with bcrypt (12 rounds) before saving and are never returned.
- Login returns a JWT that expires after `JWT_EXPIRES_IN` (default 1 day).
- The `protect` middleware checks the token; add it to any route you want to lock.

## Test in Postman

Import `postman/auth-api.postman_collection.json` and run the requests from top to bottom.
Register and Login save the token automatically, so the protected request just works.
