## live-session-with_unique_Id_project
# Live Session Web App
Description
This project is a Live Session Management Web App built using **Spring Boot (Java), **React (Vite), and PostgreSQL.

It allows an Admin to start a live video session and generate a unique session link for students.
When the student opens that link, they can watch the same video session with full controls — Play, Pause, Volume, and Fullscreen.

This app simulates a basic real-time classroom or meeting session flow with unique session tracking and database persistence.

⚙️ Tech Stack
Layer	Technology
🖥️ Frontend	React (Vite), Axios, React Router
⚙️ Backend	Spring Boot (Java), Spring Data JPA
🗄️ Database	PostgreSQL
🌐 Communication	REST API (JSON)
🚀 Features
✅ Admin can start a session with a single click
✅ Automatically generates a unique session ID and unique URL
✅ Session details are stored in the database
✅ Video player appears after session starts
✅ Student can join using the shared link and access the same video player
✅ Both admin and student have full playback controls

Database Table Structure
Column	Type	Description
id	Auto Increment Primary Key	Unique ID for each session
type	VARCHAR	User type (admin/student)
unique_id	VARCHAR	Randomly generated session ID
userurl	TEXT	Unique session link
Project Structure
live-session-project/ ├── backend/ ← Spring Boot project │ ├── src/ │ ├── pom.xml │ └── ... └── frontend/ ← React (Vite) project ├── src/ ├── package.json └── ...

How to Run the Project
** Guys You have to do only one things just set the password

1. Backend Setup (Spring Boot)
Open project in IntelliJ IDEA
Configure PostgreSQL credentials in application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/live_sessions_db
spring.datasource.username=postgres
spring.datasource.password=your_password //Here you have to enter the password which you entered the password during the postgress installitation
spring.jpa.hibernate.ddl-auto=update

Now click on run button then your backend will we start without any error

💻 2. Frontend Setup (React + Vite) Open terminal in the frontend/ folder

Install dependencies npm install

Start frontend npm run dev

App runs on → http://localhost:3000

<img width="1920" height="1080" alt="Screenshot 2025-11-08 150219" src="https://github.com/user-attachments/assets/5cc44589-eb88-4b31-b44d-988f7ef0d825" />
<img width="1920" height="1080" alt="Screenshot 2025-11-08 150234" src="https://github.com/user-attachments/assets/a5a673f0-3558-4bf0-bedd-48af446f98b9" />


