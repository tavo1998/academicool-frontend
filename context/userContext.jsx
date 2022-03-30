import { createContext } from "react";
import { useContext } from "react";

const UserContext = createContext()

const useUser = () => {
  const user = useContext(UserContext)
  return user
}

const UserProvider = ({ children, user }) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export {
  UserProvider,
  useUser
}