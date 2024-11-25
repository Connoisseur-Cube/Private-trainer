import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ClientProfile() {
  const navigate = useNavigate();
  const { clientId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Placeholder client data - will be replaced with database fetch
  const clientData = {
    id: clientId,
    name: 'John Doe',
    age: 30,
    fitnessGoal: 'Muscle Gain'
  };

  const handleStartWorkout = () => {
    navigate(`/client/${clientId}/create-workout`);
  };

  const handleWorkoutTemplate = () => {
    navigate(`/client/${clientId}/workout-template`);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{clientData.name}'s Profile</h2>
        <button 
          onClick={() => navigate('/dashboard')}
          style={{ 
            padding: '8px 15px', 
            backgroundColor: '#f44336', 
            color: 'white', 
            border: 'none' 
          }}
        >
          Back to Dashboard
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginTop: '20px',
        marginBottom: '20px' 
      }}>
        <button 
          onClick={handleStartWorkout}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none',
            flex: 1
          }}
        >
          Start Workout
        </button>
        <button 
          onClick={handleWorkoutTemplate}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#2196F3', 
            color: 'white', 
            border: 'none',
            flex: 1
          }}
        >
          Create Workout Template
        </button>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
        <div style={{ 
          display: 'flex', 
          borderBottom: '1px solid #ddd' 
        }}>
          <button 
            onClick={() => setActiveTab('overview')}
            style={{ 
              flex: 1, 
              padding: '10px', 
              backgroundColor: activeTab === 'overview' ? '#f0f0f0' : 'white',
              border: 'none',
              borderRight: '1px solid #ddd'
            }}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            style={{ 
              flex: 1, 
              padding: '10px', 
              backgroundColor: activeTab === 'history' ? '#f0f0f0' : 'white',
              border: 'none'
            }}
          >
            Workout History
          </button>
        </div>

        {activeTab === 'overview' && (
          <div style={{ padding: '20px' }}>
            <p>Age: {clientData.age}</p>
            <p>Fitness Goal: {clientData.fitnessGoal}</p>
          </div>
        )}

        {activeTab === 'history' && (
          <div style={{ padding: '20px' }}>
            <p>No workout history available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientProfile;