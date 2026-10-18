# Personal Expense Tracker with AI Advisor Chatbot (MERN)

A full-stack **Personal Expense Tracker Application** built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)** and integrated with an AI-powered financial advisor chatbot.

The application helps users manage their income and expenses, visualize spending patterns through interactive dashboards, and receive personalized financial insights using the OpenAI API.

## 🚀 Features

- **Income & Expense Management:** Add, edit, and delete income and expense records.
- **Transaction Categorization:** Organize transactions into categories such as Food, Travel, Bills, Shopping, and more.
- **Interactive Dashboard:** Visualize spending patterns and financial summaries using interactive charts.
- **AI Financial Advisor:** Get personalized budgeting tips, expense reduction suggestions, and financial insights.
- **Secure Authentication:** User authentication and authorization using JWT.
- **Password Security:** Hash passwords securely using bcrypt.
- **Responsive UI:** User-friendly interface built with React.js and Tailwind CSS.
- **RESTful API:** Backend APIs for managing transactions, authentication, and chatbot interactions.

## 🧠 Tech Stack

| Technology | Purpose |
| --- | --- |
| React.js | Frontend development |
| Tailwind CSS | Styling and responsive UI |
| Chart.js | Data visualization |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| OpenAI API | AI-powered financial advisor |
| JWT | Authentication |
| bcrypt | Password hashing |
| Git & GitHub | Version control |

## 🛠️ Installation and Setup

Follow these steps to run the project locally.

### 1\. Clone the Repository

```
git clone https://github.com/Anand09871234/ExpenseTracker.git
cd expense-tracker-ai
```

### 2\. Install Dependencies

Install the backend dependencies:

```
npm install
```

Install the frontend dependencies:

```
cd client
npm install
cd ..
```

### 3\. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your actual MongoDB connection string, OpenAI API key, and a strong JWT secret.

**Important:** Never commit your `.env` file or expose your API keys and secrets publicly.

### 4\. Run the Application

From the root directory, execute:

```
npm run dev
```

If the development script is configured to start both the frontend and backend, the application should be available at:

[http://localhost:3000](<http://localhost:3000>)

> **Note:** The actual startup command and frontend URL depend on the scripts configured in your `package.json` files.

## 📊 Dashboard Preview

Add a screenshot of your application dashboard below to showcase its user interface.

\<!-- Replace the image path with your actual dashboard screenshot. --\>

!Expense Tracker Dashboard

_The dashboard can display financial summaries, income and expense charts, transaction history, and the AI advisor chatbot._

## 📂 Project Structure

```
expense-tracker-ai/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Dashboard, Login, Register, etc.
│   │   ├── App.js            # Main React application
│   │   └── index.js          # Frontend entry point
│   └── package.json
│
├── server/
│   ├── routes/               # API routes
│   ├── models/               # Mongoose schemas
│   ├── controllers/          # Business logic
│   └── server.js             # Backend entry point
│
├── .env.example              # Environment variable template
├── .gitignore
├── package.json
└── README.md
```

_The directory structure may vary depending on the actual implementation._

## 💬 AI Financial Advisor Chatbot

The application integrates the OpenAI API to provide AI-powered financial guidance based on the user's financial data.

### Key Capabilities

- **Smart Budgeting Tips:** Suggest practical ways to manage monthly budgets.
- **Expense Reduction:** Identify potential areas where spending could be reduced.
- **Spending Insights:** Summarize spending habits and highlight major expense categories.
- **Personalized Recommendations:** Provide suggestions based on relevant income and expense information.
- **Financial Queries:** Allow users to ask questions about budgeting and everyday money management.

The backend securely communicates with the OpenAI API, keeping the API key on the server rather than exposing it in the frontend.

> **Disclaimer:** AI-generated suggestions are for informational purposes only and should not be considered professional financial advice.

## 🔒 Authentication and Security

The application uses authentication and security mechanisms to protect user accounts and financial data.

- **JWT Authentication:** Verify user identity through JSON Web Tokens.
- **Password Hashing:** Protect stored passwords using bcrypt.
- **Protected Routes:** Restrict access to authenticated users.
- **Environment Variables:** Store sensitive configuration values securely.
- **Data Access Control:** Ensure users can access only their own financial records.

## ⚙️ Available Scripts

The following commands are examples. Confirm that the corresponding scripts exist in your `package.json` files.

| Command | Description |
| --- | --- |
| `npm install` | Install backend dependencies |
| `npm run dev` | Start the configured development environment |
| `npm start` | Start the application if a start script is configured |

For frontend-specific scripts, navigate to the `client` directory.

## 🧩 Future Enhancements

- [ ]Google Sign-In authentication
- [ ]Recurring expenses and payment reminders
- [ ]Monthly budget goals and alerts
- [ ]Export financial reports to PDF or CSV
- [ ]Advanced AI-powered spending predictions
- [ ]React Native mobile application
- [ ]Enhanced data visualization and financial analytics

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

To contribute:

1. Fork the repository.
2. Create a feature branch:```
   git checkout -b feature-name
   ```
3. Commit your changes:```
   git commit -m "Add new feature"
   ```
4. Push your branch:```
   git push origin feature-name
   ```
5. Open a Pull Request describing your changes.

## 🧾 License

This project is intended to be available under the **MIT License**. Ensure that an appropriate `LICENSE` file is included in the repository.

## 👨‍💻 Author

**Anand Meena**

Information Science & Engineering Student at NIE Mysore

---

⭐ If you find this project useful, consider giving the repository a star!

How to use it: Create or open the `README.md` file in your project's root directory, paste the content, and commit the changes to GitHub. Replace the dashboard screenshot path with a real screenshot if you have one.
