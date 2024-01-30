import database from "../utils/database";
export const getQuestionByIdSQL = async(id:number) => {
    const [question] = await database.execute("select * from question where question_id = ?", [id]);
    return question
};

export const getQuestionByAnswerSQL = async(id:number) => {
    const [question] = await database.execute("select * FROM question INNER JOIN answer ON question.question_id=answer.question_id where answer.question_id = ?", [id]);
    return question
};

export const getAllQuestionSQL = async (category_id:number,limit:number,level:number) => {
    const [question] = await database.execute(`select * from question where question.category_id = ? and level = ? limit  ${limit} ` ,[category_id,level]  );
    return question
}

export const addQuestionSQL = async ( content_question:string,category_id:number) => {
    const [category] = await database.execute("insert into question (content_question,category_id) values (?,?)",[content_question,category_id]);
    return category
}