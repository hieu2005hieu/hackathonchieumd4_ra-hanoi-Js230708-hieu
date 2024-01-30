import database from "../utils/database";
export const getCateByIdSQL = async(id:number) => {
    const [category] = await database.execute("select * from category where category_id = ?", [id]);
    return category
};

export const getAllCateSQL = async () => {
    const [category] = await database.execute("select * from category ");
    return category
}

export const addCateSQL = async (name:string) => {
    const [category] = await database.execute("insert into category (name) values (?)",[name]);
    return category
}