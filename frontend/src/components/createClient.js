import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateClient() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    fitnessGoal: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual client creation logic
    console.log('Client Data:', clientData);
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Create Client Profile</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={clientData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={clientData.age}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={clientData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={clientData.phoneNumber}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Fitness Goal:</label>
          <select
            name="fitnessGoal"
            value={clientData.fitnessGoal}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
            <option value="Flexibility">Flexibility</option>
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button 
            type="submit"
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none' 
            }}
          >
            Create Client
          </button>
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#f44336', 
              color: 'white', 
              border: 'none' 
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateClient;