import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const HandleLogin = async (loginDate) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginDate),
        credentials: "include",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(`Статус: ${response.status}`);
      }

      const { success, message, user } = result;

      console.log(message);
      setIsAuth(success);
      setLoading(!success);
      setUser(user);

      navigate("/requests");
    } catch (error) {
      setFailure(error.message);
      console.error("Ошибка:", failure);
    }
  };

  const HandleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/logout", {
        credentials: "include",
      });

      const result = await response.json();
      const { success, message } = result;

      console.log(message);
      setIsAuth(success);
      setLoading(!success);
    } catch (error) {
      setFailure(error.message);
      console.error("Ошибка:", failure);
    }

    navigate("/login", { replace: true });
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/auth/me", {
        credentials: "include",
      });
      if (response.ok) {
        const result = await response.json();
        const { success, message, user } = result;

        console.log(message);
        setIsAuth(success);

        setUser(user || null);
      } else if (response.status === 401) {
        setIsAuth(false);
        setUser(null);
      } else {
        throw new Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      console.error("Ошибка проверки auth:", error);
      setIsAuth(false);
      setUser(null);
      setFailure(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, HandleLogout, HandleLogin, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*   return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
  
  Старая запись. С 19 версии .Provider не используется*/
