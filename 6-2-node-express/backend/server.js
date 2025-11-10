import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

{/*write code for cors*/}
app.use(cors());

{/*write code to define routes*/}

{/*write code to create server*/}



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});