import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('details')) || null); 

  return (
    <AuthContext.Provider value={{ datas, setDatas }}>
      {children}
    </AuthContext.Provider>
  );
};

