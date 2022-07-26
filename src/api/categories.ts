import { CategoryType } from "../types/categories"
import { ProductType } from "../types/product"
import instance from "./instance"
export const list = () => {
    const url = "/categories"
    return instance.get(url)
}
export const remove = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const add = (data:any) => {
    const url = "/categories"
    return instance.post(url, data)
}
export const update = (categories: CategoryType) => {
    const url = `/categories/${categories.id}`;
    return instance.put(url, categories);
}
export const read = (id:number | undefined) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}