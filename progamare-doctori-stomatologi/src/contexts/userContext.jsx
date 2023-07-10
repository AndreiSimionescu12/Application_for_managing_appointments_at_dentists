import { useState, createContext } from 'react'
export const UserContext = createContext({})

export function UserContextProvider ({ children }) {
    const [email, setEmail] = useState('');
    const [parola, setParola] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[numeUtilizator,setNumeUtilizator]=useState("");
    const[rol,setRol]=useState("");

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, email, setEmail, parola, setParola,numeUtilizator,setNumeUtilizator,rol,setRol }}
    >
      {children}
    </UserContext.Provider>
  )
}