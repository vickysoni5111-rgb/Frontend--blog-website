import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

interface AuthContextType {
  currentUser: Omit<User, "password"> | null;
  register: (name: string, email: string, password: string, phone?: string) => { success: boolean; message: string };
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "bookacabnow_users";
const CURRENT_USER_KEY = "bookacabnow_current_user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Omit<User, "password"> | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
  }, []);

  const getUsers = (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  };

  const register = (name: string, email: string, password: string, phone?: string) => {
    const users = getUsers();

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return { success: false, message: "Ye email pehle se register hai. Login karein." };
    }

    const newUser: User = { name, email, password, phone };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Auto-login upon registration
    const { password: _pw, ...userWithoutPassword } = newUser;
    setCurrentUser(userWithoutPassword);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));

    return { success: true, message: "Registration successful! Redirecting to dashboard..." };
  };

  const login = (email: string, password: string) => {
    const users = getUsers();

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return { success: false, message: "Email ya password galat hai." };
    }

    const { password: _pw, ...userWithoutPassword } = user;
    setCurrentUser(userWithoutPassword);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));

    return { success: true, message: "Login successful!" };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};