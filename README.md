# 📝 React To-Do List (Frontend)

A sleek, responsive, and robust To-Do List web application built with modern React. This repository contains the **frontend client** that connects to a dedicated backend API.

*Note: The backend server for this project is located in a separate GitHub repository.*

## 🚀 Tech Stack

This project uses a highly modern React stack:
* **[React 19](https://react.dev/)** - Core UI Library
* **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
* **[React Router 7](https://reactrouter.com/)** - Client-side routing & Protected Routes
* **[TanStack Query](https://tanstack.com/query/latest)** - Data fetching, caching, and state management
* **[js-cookie](https://github.com/js-cookie/js-cookie)** - For JWT token management

## ✨ Features

* **Robust JWT Authentication:** Secure user login utilizing an `AuthContext` and custom `ProtectedRoute` wrappers.
* **Global API Interceptors:** A custom fetch wrapper that automatically catches `401 Unauthorized` errors to seamlessly log out expired sessions.
* **CRUD Operations:** Create, Read, Update, and Delete your daily tasks and categories.
* **Server State Management:** Uses React Query (TanStack) to minimize loading states and perfectly sync frontend data with the backend.


## 🔐 Authentication Flow

1. The user submits their credentials via the `/login` route.
2. The Node.js backend responds with a JWT cookie.
3. The app's `AuthContext` detects the token and globally sets the `isAuth` state to true.
4. The React Router `ProtectedRoute` component intercepts access attempts and grants access to protected pages (like `/tasks`).
5. All subsequent API calls are routed through a custom `ProtectedFetch` wrapper. If the token expires or is deleted, the wrapper catches the backend's `401 Unauthorized` response, wipes the local cookie, and securely redirects the user to the login screen.
