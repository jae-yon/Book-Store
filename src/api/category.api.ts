import { Category } from "../models/category.model";
import { httpClient } from "./http";

// 카테고리

export const fetchCategory = async () => {
  const response = await httpClient.get<Category[]>('/category');
  return response.data;
}