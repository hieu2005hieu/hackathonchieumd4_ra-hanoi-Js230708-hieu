import express, { Request, Response } from "express";
import { addCateSQL, getAllCateSQL, getCateByIdSQL } from "../service/category.service";

export const getCateById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await getCateByIdSQL(Number(id));
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
};

export const getAllCate = async (req: Request, res: Response) => {
    try {
        const result = await getAllCateSQL();
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
};

export const addCate = async (req: Request, res: Response)=>{
    try {
        const {name} = req.body
        const result = await addCateSQL(String(name))
        res.status(200).json({
            result,
            message:"them thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}