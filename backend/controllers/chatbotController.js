// backend/controllers/chatbotController.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

// 1. Initialize genAI first using your API key.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// @desc    Get an AI-powered savings tip based on an expense
// @route   POST /api/chatbot
exports.getSavingsTip = async (req, res, next) => {
    const { category, amount, description } = req.body;

    if (!category || !amount || !description) {
        return res.status(400).json({
            success: false,
            error: 'Category, amount, and description are required.'
        });
    }

    const prompt = `
        You are an AI financial assistant for an expense tracking application.

        Analyze the expense below and provide ONE concise, practical savings tip.

        Expense:
        - Amount: ₹${amount}
        - Category: ${category}
        - Description: ${description || "Not provided"}

        Rules:
        1. Treat the amount exactly as provided. Never add, remove, or change digits.
        2. Never invent facts about the user's spending.
        3. If the amount appears unusually large, explicitly suggest verifying the entry instead of assuming what caused it.
        4. Do not make jokes or sarcastic comments about the expense.
        5. Do not assume the user's location, lifestyle, income, or circumstances.
        6. Keep the response between 2 and 4 sentences.
        7. Give practical financial advice relevant to the category.
        `;

    try {
        // 2. Get the model *inside* the function that will use it.
        const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const tip = response.text();

        res.status(200).json({
            success: true,
            reply: tip
        });

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({
            success: false,
            reply: "Sorry, my AI brain is taking a little nap. Please try again in a moment."
        });
    }
};