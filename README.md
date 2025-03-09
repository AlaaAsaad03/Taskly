# Taskly

Taskly is a task management web application designed to help users organize, track, and complete their tasks efficiently. Built with modern web technologies, Taskly provides an intuitive UI and seamless experience for managing daily to-dos.

## Features
- 📝 **Task Management**: Create, update, and delete tasks effortlessly.
- 📌 **Categories & Priorities**: Organize tasks by category and set priority levels.
- 📅 **Due Dates & Reminders**: Set due dates and receive reminders for upcoming tasks.
- 👥 **User Authentication**: Secure login and registration.
- 📊 **Progress Tracking**: Visual indicators to track task completion.


## Tech Stack
### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router

### Backend
- Node.js & Express.js
- MongoDB Atlas
- JWT Authentication

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/AlaaAsaad03/Taskly.git
   cd Taskly
   ```
2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd client
   npm install
   
   # Install backend dependencies
   cd ../server
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the server directory and add the following:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. **Run the application**
   ```bash
   # Start backend
   cd server
   npm run dev
   
   # Start frontend
   cd ../client
   npm run dev
   ```

## Usage
1. Register or log in to your account.
2. Create and manage tasks.
3. Track progress and mark tasks as completed.

## Contributing
Contributions are welcome! If you'd like to improve Taskly, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, feel free to reach out to [Alaa Asaad](https://github.com/AlaaAsaad03).

