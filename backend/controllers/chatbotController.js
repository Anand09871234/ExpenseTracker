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
        You are a sharp, friendly, and encouraging financial advisor from India.
        A user from Mysuru, Karnataka just logged a new expense in their app. Here are the details:
        - Category: ${category}
        - Amount: ₹${amount}
        - Description: "${description}"

        Based on this specific expense, provide a single, short (2-3 sentences), insightful, and encouraging savings tip or observation. 
        Speak directly to the user in a helpful tone. Avoid generic advice if possible and relate it to the expense.
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