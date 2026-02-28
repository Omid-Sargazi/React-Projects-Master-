// Problem2-SearchWithDebounce.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const SearchWithDebounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useCallback(
    debounce(async (term) => {
      if (!term.trim()) {
        setUsers([]);
        return;
      }
      
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.example.com/users/search?q=${term}`
        );
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError('خطا در جستجوی کاربران');
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <h2>جستجوی کاربران</h2>
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="نام کاربر را وارد کنید..."
          className="search-input"
        />
        {loading && <span className="loading-spinner">⏳</span>}
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <span className="user-role">{user.role}</span>
            </div>
          </div>
        ))}
        
        {!loading && users.length === 0 && searchTerm && (
          <p className="no-results">نتیجه‌ای یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default SearchWithDebounce;