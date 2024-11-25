import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([
    // Placeholder clients - will be replaced with database fetch
    { 
      id: '1', 
      name: 'John Doe', 
      age: 30, 
      fitnessGoal: 'Muscle Gain' 
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      age: 25, 
      fitnessGoal: 'Weight Loss' 
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  const handleCreateClient = () => {
    navigate('/create-client');
  };

  const handleClientProfile = (clientId) => {
    navigate(`/client/${clientId}`);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleLogout}
            style={{ 
              padding: '10px', 
              backgroundColor: '#f44336', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            Log Out
          </button>
          <button 
            onClick={handleChangePassword}
            style={{ 
              padding: '10px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            Change Password
          </button>
        </div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '15px' 
      }}>
        {clients.map(client => (
          <div 
            key={client.id}
            onClick={() => handleClientProfile(client.id)}
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px', 
              cursor: 'pointer',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <h3>{client.name}</h3>
            <p>Age: {client.age}</p>
            <p>Goal: {client.fitnessGoal}</p>
          </div>
        ))}
        
        <div 
          onClick={handleCreateClient}
          style={{ 
            border: '2px dashed #4CAF50', 
            borderRadius: '8px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(76, 175, 80, 0.1)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <PlusIcon size={48} color="#4CAF50" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;