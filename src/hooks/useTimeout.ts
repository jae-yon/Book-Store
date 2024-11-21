import { useEffect } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    // 토스트 삭제
    const timer = setTimeout(callback, delay);

    return () => clearTimeout(timer);
  }, []);
}

export default useTimeout;