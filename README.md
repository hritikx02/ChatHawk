# ChatHawk - A MERN Chat Application

ChatHawk is a modern, real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, registration, and the ability to upload profile pictures.

## Features

- **User Registration**: Secure user registration with password hashing.
- **User Login**: Authentication using JWT tokens.
- **Profile Picture Upload**: Option to upload profile pictures with Cloudinary integration.
- **Real-time Chat**: Dynamic messaging system (to be implemented).

## Tech Stack

### Frontend
- React
- Chakra UI
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Additional Tools
- Cloudinary (Image upload)
- Axios (HTTP Requests)
- Bcrypt.js (Password hashing)
- JSON Web Tokens (JWT)

## Installation

### Prerequisites
- Node.js
- MongoDB
- Cloudinary Account

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   cd <project-folder>
   npm install
   cd frontend
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

4. Run the application:
   ```bash
   # Run the backend
   npm run server

   # Run the frontend
   cd frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```plaintext
├── backend
│   ├── config
│   │   ├── db.js
│   │   ├── generateToken.js
│   ├── controllers
│   │   ├── userControllers.js
│   ├── middleware
│   │   ├── errorMiddleware.js
│   ├── models
│   │   ├── userModel.js
│   ├── routes
│   │   ├── userRoutes.js
│   ├── data
│   │   ├── data.js
│   ├── server.js
├── frontend
│   ├── src
│   │   ├── componentsCreated
│   │   │   ├──Login.js
│   │   │   ├──Signup.js
│   │   ├── pages
│   │   │   ├──Homepage.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── index.js
```

## API Endpoints

### User Routes

| Route         | Method | Description                |
|---------------|--------|----------------------------|
| `/api/user`   | POST   | Register a new user        |
| `/api/user/login` | POST   | Authenticate a user        |

## Future Enhancements

- Real-time messaging with Socket.IO
- Group chat functionality
- Search and filter users
- Push notifications

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Acknowledgements

- [Chakra UI](https://chakra-ui.com/)
- [Cloudinary](https://cloudinary.com/)
- [MongoDB](https://www.mongodb.com/)