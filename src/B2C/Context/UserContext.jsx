// src/B2C/Context/UserContext.js
import React, { createContext, useState } from 'react';

// Create the context object
export const UserContext = createContext();

// Create a Provider component that will wrap your app
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};