# django-react-notes-app

A full-stack note-taking application built with Django and React.  
Users can register, log in, and manage personal notes via a modern API-based interface.

---

## Features

- User registration and JWT authentication
- Create, view, and delete notes
- Protected API routes
- React frontend with Axios and React Router
- Responsive layout with basic styling

---

## Preview

![Notes](./assets/home-view.gif)

---

## Tech Stack

- **Backend**: Django, Django REST Framework, djoser, CORS
- **Frontend**: React, Vite, Axios, jwt-decode, react-router-dom
- **Auth**: JWT (access + refresh tokens)

---

## Getting Started

### Backend

python -m venv env
source env/bin/activate   # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend

npm create vite@latest frontend -- --template react
cd frontend
npm install
echo VITE_API_URL=http://localhost:8000/api > .env
npm install axios jwt-decode react-router-dom
npm run dev

---

## License

This project is for educational use only.
