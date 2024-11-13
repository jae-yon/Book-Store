import { useCallback } from "react"

// 알림 메시지 훅

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  return showAlert;
}