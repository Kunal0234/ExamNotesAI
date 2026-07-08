ExamNotes AI 🧠

An AI-powered SaaS platform that generates exam-oriented notes, diagrams, and revision content in one click using Google Gemini AI.

Live Demo

🚀 examnotesaiclient-ichy.onrender.com

Features


🤖 AI-generated exam notes using Google Gemini API
💳 Credit-based payment system with Stripe integration
🔐 JWT Authentication with bcrypt password hashing
📊 Auto-generated diagrams, graphs and charts
📝 Revision mode for short and crisp notes
🎯 Subject and class-wise important questions
🚀 Production-ready deployment


Tech Stack

Frontend


React.js
Axios


Backend


Node.js + Express.js
MongoDB + Mongoose
JWT Authentication
bcrypt


Integrations


Google Gemini AI API
Stripe Payment Gateway + Webhooks


Deployment


Backend: Render
Frontend: Render


Getting Started

bash# Clone the repo
git clone https://github.com/Kunal0234/ExamNotesAI.git

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

Environment Variables

Create a .env file in the server folder:

envMONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
PORT=5000

Create a .env file in the client folder:

envVITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

bash# Run backend
cd server
npm run dev

# Run frontend  
cd client
npm run dev

How It Works


User registers and logs in
User purchases credits via Stripe payment
Stripe webhook updates credits after successful payment
User enters subject and topic
Gemini AI generates structured exam notes
Notes are displayed with diagrams and revision content


Project Structure

ExamNotesAI/
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   └── index.html

Author

Kunal Kumar


GitHub: @Kunal0234
