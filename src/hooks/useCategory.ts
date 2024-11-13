import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";

// 서버로부터 패치 받아온 카테고리 리스트를 정렬하여 반환하는 훅

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {

      if (!category) return;

      const categoryWithAll = [
        {
          id: null,
          name: "전체",
        },
        ...category,
      ];

      setCategory(categoryWithAll);
    })
  }, []);

  return { category };
}