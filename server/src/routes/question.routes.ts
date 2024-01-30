import express from "express"
import { addQuestion, getAllQuestion, getQuestionByAnswer, getQuestionById } from "../controller/question.controller"
const questionRoutes = express.Router()

questionRoutes.get("/:id",getQuestionById)
questionRoutes.get("/:id/answer",getQuestionByAnswer)
questionRoutes.get("/",getAllQuestion)
questionRoutes.post("/",addQuestion)

export default questionRoutes