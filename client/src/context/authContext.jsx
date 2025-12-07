import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Estado para el toast
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // Al iniciar la app, restauro sesión desde localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser(null);
        }
      }
    }
    setLoading(false);
  }, []);

  // LOGIN
  const login = (newToken, userData) => {
    setToken(newToken);
    setUser(userData || null);

    localStorage.setItem("token", newToken);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }

    showToast("Inicio de sesión exitoso ✔️");

    // Redirigir al home
    navigate("/");
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    showToast("Sesión cerrada con éxito");

    navigate("/");
  };

  const value = {
    token,
    user,
    isAuthenticated: !!token,
    loading,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#87a96b",
            color: "black",
            padding: "12px 18px",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            animation: "fadeInOut 2.5s ease",
            zIndex: 9999,
            fontSize: "0.95rem",
          }}
        >
          {toast}
        </div>
      )}
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
