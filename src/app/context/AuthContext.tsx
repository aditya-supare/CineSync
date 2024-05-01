'use client'
import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext({ user: "" });

export const AuthContextProvider = () => {
  const [user, setUser] = useState('aitya');

  return (
    <AuthContext.Provider value={{ user }}>
      {/* Content inside the provider */}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
