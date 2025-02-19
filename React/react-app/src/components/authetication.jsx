import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();
export const useAuth = () => React.useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/core/api/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('core/api/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setUser(response.data.user);
    } catch (error) {
      setError('Authentication failed');
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
