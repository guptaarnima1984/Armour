import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  TextField,
  MenuItem,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';

const AnalyticsReports: React.FC = () => {
  const [reportType, setReportType] = useState('monthly');
  const [exportFormat, setExportFormat] = useState('pdf');

  const revenueData = [
    { month: 'Jan', revenue: 40000, target: 45000 },
    { month: 'Feb', revenue: 45000, target: 45000 },
    { month: 'Mar', revenue: 50000, target: 50000 },
    { month: 'Apr', revenue: 55000, target: 50000 },
    { month: 'May', revenue: 60000, target: 55000 },
    { month: 'Jun', revenue: 65000, target: 60000 },
  ];

  const departmentData = [
    { name: 'Operations', value: 35, fill: '#8884d8' },
    { name: 'HR', value: 20, fill: '#82ca9d' },
    { name: 'Finance', value: 25, fill: '#ffc658' },
    { name: 'Sales', value: 20, fill: '#ff7c7c' },
  ];

  const performanceData = [
    { employee: 'John', jan: 85, feb: 88, mar: 90, apr: 92 },
    { employee: 'Jane', jan: 78, feb: 82, mar: 85, apr: 88 },
    { employee: 'Bob', jan: 80, feb: 85, mar: 88, apr: 90 },
  ];

  const kpis = [
    { label: 'Total Revenue', value: '$315,000', trend: '+12%' },
    { label: 'Active Projects', value: '12', trend: '+2' },
    { label: 'Employee Count', value: '150', trend: '+5' },
    { label: 'Client Satisfaction', value: '92%', trend: '+3%' },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4">📊 Analytics & Reports</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            select
            size="small"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            label="Report Type"
          >
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </TextField>
          <TextField
            select
            size="small"
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            label="Export Format"
          >
            <MenuItem value="pdf">PDF</MenuItem>
            <MenuItem value="excel">Excel</MenuItem>
            <MenuItem value="csv">CSV</MenuItem>
          </TextField>
          <Button variant="contained" startIcon={<DownloadIcon />}>
            Export
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {kpis.map((kpi) => (
          <Grid item xs={12} sm={6} md={3} key={kpi.label}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {kpi.label}
                </Typography>
                <Typography variant="h5">{kpi.value}</Typography>
                <Typography variant="caption" sx={{ color: kpi.trend.startsWith('+') ? 'green' : 'red' }}>
                  {kpi.trend}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Revenue vs Target
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="target" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Department Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Employee Performance Trend
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="employee" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jan" stroke="#8884d8" />
                <Line type="monotone" dataKey="feb" stroke="#82ca9d" />
                <Line type="monotone" dataKey="mar" stroke="#ffc658" />
                <Line type="monotone" dataKey="apr" stroke="#ff7c7c" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsReports;