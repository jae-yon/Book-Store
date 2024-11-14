import { create } from "zustand";

interface StoreState {
  isLoggedIn : boolean;
  storeLogin : (token:string) => void;
  storeLogout :  () => void;
}

// 토큰 가져오기
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
}

// 토큰 등록
const setToken = (token:string) => {
  localStorage.setItem("token", token);
}

// 토큰 제거
export const removeToken = () => {
  localStorage.removeItem("token")
}

export const useAuthStore = create<StoreState>((set) => ({
  // 초기값
  isLoggedIn : getToken() ? true : false,
  // 액션 : 로그인
  storeLogin : (token:string) => {
    set({ isLoggedIn : true });
    setToken(token);
  },
  // 액션 : 로그아웃
  storeLogout : () => {
    set({ isLoggedIn : false });
    removeToken();
  }
}));