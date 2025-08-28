Company Name : CODTECH IT SOLUTIONS

Name : Riya Shivaji Sangle

Intern ID : CT08DH2221

Domain : Front End Development

Duration : 8 weeks

Mentor : Neela Santosh

Description : TASK 2 (Real-time Chat Application)

During this task, I worked on developing a Real-Time Chat Application using React on the frontend and Node.js with WebSockets on the backend. The whole idea of this project was to build a communication system where multiple users can exchange messages instantly without needing to refresh the page. I found this task very interesting because it gave me hands-on experience in both frontend and backend development and also helped me understand how real-time communication actually works behind the scenes.

The project started with setting up the backend server. For this, I used Node.js and implemented a WebSocket server. WebSockets are important because unlike normal HTTP requests, they allow continuous two-way communication between the server and the client. This means that whenever a user sends a message, the server can broadcast it to all connected clients immediately. I wrote the server code in server.js and tested it to make sure it was running on ws://localhost:8080. Once the server was working, I could see logs in the terminal like “Client connected” and “Message received,” which showed that the server was handling connections properly.

After setting up the backend, the next part was designing the frontend using React and Vite. I created a simple chat UI that displays a chat box, an input field, and a Send button. This interface is where the user types their message and sends it. When a user enters a message and presses send, the message is passed to the WebSocket server, which then shares it with all connected clients. This way, if multiple people are connected, they all see the same messages at the same time.

At first, when I opened the application, I could see the UI running on localhost:5173 with the title “Real-Time Chat.” I typed messages like “Hello,” but I noticed they weren’t appearing in the chat box. That’s when I realized that the frontend was just sending plain strings, while the server expected messages in JSON format. I updated the code so that the messages had a structure like { "type": "message", "user": "Riya", "text": "Hello" }. Once this was fixed, the chat messages started displaying properly with usernames.

One thing I learned through this project is that real-time applications rely heavily on message structure and correct communication between client and server. Even a small mismatch, like sending a string instead of JSON, can cause the chat not to display messages. I also understood the importance of having both the frontend and backend running simultaneously: the backend manages message broadcasting, while the frontend provides the user interface.

As for the applications of this project, real-time chat systems are used everywhere. They are the backbone of platforms like WhatsApp, Messenger, Slack, and even customer support chat boxes on websites. Beyond chatting, the same real-time technology can also be applied in online gaming, collaborative document editing (like Google Docs), live stock updates, and online classrooms. Essentially, any place where instant communication or updates are needed can benefit from real-time applications.

Overall, this project not only gave me technical knowledge but also boosted my confidence in working with full-stack concepts. I now have a clear idea of how a frontend and backend communicate in real-time and how WebSockets make that possible. If I want to expand this project in the future, I could add features like user authentication, private chat rooms, file sharing, or even emojis and reactions. But as a learning step, successfully implementing this real-time chat was a huge achievement for me.

OUTPUT : 

<img width="2560" height="1664" alt="image" src="https://github.com/user-attachments/assets/60852519-c6e5-48a9-b830-350d63ecd757" />
<img width="2560" height="1664" alt="image" src="https://github.com/user-attachments/assets/6ac842c5-5014-4d99-a312-232f62c7ef67" />


