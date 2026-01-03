📈 StockMates — Secure Stock Tracking & Investor Collaboration Platform

StockMates is a full-stack stock monitoring and investor collaboration platform that enables users to securely authenticate using OAuth (Google Sign-In), track real-time stock data, and collaborate with other investors — all within a clean, scalable web application.

Built with real-world security, performance, and extensibility in mind, StockMates mirrors how modern fintech products are designed and engineered.

🔐 Authentication First (OAuth)

StockMates uses OAuth 2.0 (Google Authentication) as its primary authentication mechanism.

Why OAuth?

✅ Secure, password-less authentication

✅ Industry-standard login flow

✅ Faster onboarding experience

✅ No password storage or handling

✅ Reduced security risk

This approach reflects how production-grade fintech and SaaS platforms handle authentication.

🌐 Live Demo

Frontend: (Add deployed link)

Backend API: (Add backend link if deployed)

🎯 Project Vision

Retail investors often struggle with:

Scattered stock tracking tools

Weak collaboration platforms

Poor real-time updates

Insecure authentication systems

StockMates solves this by combining:

Secure OAuth-based access

Live market monitoring

Investor-focused collaboration

Scalable backend architecture

Track smarter. Collaborate better. Invest confidently.

🚀 Key Features
🔐 Secure Authentication (OAuth)

Google OAuth 2.0 login

Token-based session handling

Protected routes and APIs

Seamless login/logout flow

📊 Stock Monitoring

Real-time stock price tracking

Clean and responsive dashboards

Optimized API calls for performance

Scalable data-fetching architecture

👥 Investor Collaboration

Designed for investor interaction (not generic chat)

Scalable backend for future group features

Clean UI structure for collaboration workflows

⚡ Real-Time Capabilities

WebSocket-based real-time updates

Instant stock price refresh

No page reloads for live data

🧠 Tech Stack
Frontend

React.js

Tailwind CSS

OAuth (Google Sign-In)

Responsive UI design

Backend

Node.js

Express.js

MongoDB + Mongoose

OAuth token verification

REST APIs

WebSockets

Dev & Deployment

Environment-based configuration

Modular backend architecture

Ready for Vercel / Render deployment

🏗️ System Architecture
User
 ↓
Google OAuth
 ↓
Frontend (React)
 ↓
Backend API (Node + Express)
 ↓
MongoDB (Users & Stock Data)


Security Flow

OAuth token issued by Google

Token verified on backend

User session established securely

Protected routes enforced

📂 Project Structure
stockmates/
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── auth/
│   ├── services/
│   └── styles/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── oauth/
│   └── app.js

⚙️ Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/your-username/stockmates.git
cd stockmates

2️⃣ Backend Setup
cd backend
npm install


Create .env:

PORT=5000
MONGO_URL=your_mongodb_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🧪 Tested Scenarios

OAuth login & logout

Token verification on backend

Protected API access

Stock data fetching

Real-time updates

Error handling & edge cases

🔮 Future Enhancements

📈 Advanced stock charts & indicators

🧠 AI-based stock insights

👥 Investor groups & discussions

🔔 Price alerts & notifications

📊 Portfolio tracking

📰 Market news integration

👨‍💻 Author

Satyajit Sahoo
Computer Science Student | Full-Stack Developer

GitHub: https://github.com/Satyajit-69

LinkedIn: https://www.linkedin.com/in/satyajit-sahoo-b16795315/
