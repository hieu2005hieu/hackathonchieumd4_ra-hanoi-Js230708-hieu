import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors"
import cateRoutes from "./routes/category.routes";
import questionRoutes from "./routes/question.routes";
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use("/api/v1/categories", cateRoutes);
app.use("/api/v1/question",questionRoutes)

const PORT: number = 8686;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});