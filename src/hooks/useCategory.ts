import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

// 서버로부터 패치 받아온 카테고리 리스트를 정렬하여 반환하는 훅

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  // console.log('location: ', location);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get("category_id")) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.id === Number(params.get("category_id")),
          }
        })
      })
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          }
        })
      })
    }
  }

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
      setActive();
    })
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
}