const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/quote/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const url = `https://www.shareswatch.in/api/stocks/${symbol}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});