import { useCallback } from "react"

// 알림 메시지 훅

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  const showConfirm = useCallback(
    (message: string, onConfirm: () => void) => {
      if (window.confirm(message)) {
        onConfirm();
      }
    }, []
  );

  return { showAlert, showConfirm };
}