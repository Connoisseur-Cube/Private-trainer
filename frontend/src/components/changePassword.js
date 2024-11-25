import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/change-password', {
        oldPassword,
        newPassword
      });
      setMessage('Password updated successfully');
      
      // Optional: Redirect to dashboard after successful password change
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setMessage('Error updating password');
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Change Password</h2>
      {message && <p style={{ 
        color: message.includes('successfully') ? 'green' : 'red',
        textAlign: 'center'
      }}>{message}</p>}
      <form onSubmit={handlePasswordChange}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Old Password:
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              boxSizing: 'border-box' 
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            New Password:
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              boxSizing: 'border-box' 
            }}
          />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between' 
        }}>
          <button 
            type="submit"
            style={{ 
              width: '48%', 
              padding: '10px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Update Password
          </button>
          <button 
            type="button"
            onClick={handleCancel}
            style={{ 
              width: '48%', 
              padding: '10px', 
              backgroundColor: '#f44336', 
              color: 'white', 
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;