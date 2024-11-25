import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import ChangePassword from './components/changePassword';
import CreateClient from './components/createClient';
import ClientProfile from './components/clientProfile';
import CreateWorkout from './components/createWorkout';
import WorkoutTemplate from './components/workoutTemplate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/client/:clientId" element={<ClientProfile />} />
        <Route path="/client/:clientId/create-workout" element={<CreateWorkout />} />
        <Route path="/client/:clientId/workout-template" element={<WorkoutTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;