import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoginScreen from './pages/LoginScreen';
import MDDashboard from './pages/MDDashboard';
import OperationsModule from './pages/OperationsModule';
import HRModule from './pages/HRModule';
import AccountsModule from './pages/AccountsModule';
import BusinessDevelopmentModule from './pages/BusinessDevelopmentModule';
import DailyTaskReporting from './pages/DailyTaskReporting';
import GPSAttendance from './pages/GPSAttendance';
import SiteInspection from './pages/SiteInspection';
import ClientComplaintManagement from './pages/ClientComplaintManagement';
import DocumentManagement from './pages/DocumentManagement';
import LeaveManagement from './pages/LeaveManagement';
import AnalyticsReports from './pages/AnalyticsReports';
import MainLayout from './layouts/MainLayout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />} />
          
          {isAuthenticated && (
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<MDDashboard />} />
              <Route path="/operations" element={<OperationsModule />} />
              <Route path="/hr" element={<HRModule />} />
              <Route path="/accounts" element={<AccountsModule />} />
              <Route path="/business-development" element={<BusinessDevelopmentModule />} />
              <Route path="/daily-tasks" element={<DailyTaskReporting />} />
              <Route path="/attendance" element={<GPSAttendance />} />
              <Route path="/site-inspection" element={<SiteInspection />} />
              <Route path="/complaints" element={<ClientComplaintManagement />} />
              <Route path="/documents" element={<DocumentManagement />} />
              <Route path="/leave" element={<LeaveManagement />} />
              <Route path="/analytics" element={<AnalyticsReports />} />
            </Route>
          )}
          
          <Route path="/" element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;