import express, { Request, Response } from "express";
import { addQuestionSQL, getAllQuestionSQL, getQuestionByAnswerSQL, getQuestionByIdSQL } from "../service/question.service";
export const getQuestionById = async (req: Request, res: Response)=>{
      try {
        const {id} = req.params
        const result = await getQuestionByIdSQL(Number(id));
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
}

export const getQuestionByAnswer = async (req: Request, res: Response)=>{
      try {
        const {id} = req.params
        const result = await getQuestionByAnswerSQL(Number(id));
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
}

export const getAllQuestion = async (req: Request, res: Response) => {
    const {category, limit, level} = req.query
    const result = await getAllQuestionSQL(Number(category),Number(limit) ,Number(level) )
        res.status(200).json(result);
}

export const addQuestion = async (req: Request, res: Response) => {
    const {content_question,category_id} = req.body
    const result = await addQuestionSQL(content_question,category_id)
        res.status(200).json({
            result,
            message:"them thanh cong"
        });
}

export const filterQuestion = async (req: Request, res: Response)=>{
    const {category_id, limit, level} = req.query
    console.log(req.query)
}