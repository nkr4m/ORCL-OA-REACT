import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/landing/Landing'
import LandingAuth from './components/landing-auth/LandingAuth'
import AdminWall from './components/admin-wall/AdminWall';
import Dashboard from './components/admin-wall/dashboard/Dashboard';
import Survey from './components/admin-wall/survey/Survey';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing-auth" element={<LandingAuth />} />
        {/* Nested route for AdminWall */}
        <Route path="/admin-wall" element={<AdminWall />}>
          {/* Redirect from /admin-wall to /admin-wall/dashboard */}
          <Route path="" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="survey/:id" element={<Survey />} />
        </Route>
        {/* wild card route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
