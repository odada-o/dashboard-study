import { createContext, useContext } from "react";

// 생성
const UserContext = createContext();

// 보급
export const UserProvider = ({children}) => {

  const userData = {
    name: "김철수",
    email: "cheolsu@example.com",
    age: 25,
    location: "서울"
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  )
}

// 사용
export const useUser = () => {
  return useContext(UserContext)
}