import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from '@mui/material';

interface Complaint {
  id: number;
  clientName: string;
  subject: string;
  description: string;
  date: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'High' | 'Medium' | 'Low';
}

const ClientComplaintManagement: React.FC = () => {
  const complaints: Complaint[] = [
    { id: 1, clientName: 'ABC Corp', subject: 'Service Quality Issue', description: 'Poor response time', date: '2024-06-10', status: 'In Progress', priority: 'High' },
    { id: 2, clientName: 'XYZ Ltd', subject: 'Billing Discrepancy', description: 'Overcharge detected', date: '2024-06-11', status: 'Open', priority: 'Medium' },
    { id: 3, clientName: 'Tech Solutions', subject: 'Equipment Failure', description: 'Equipment stopped working', date: '2024-06-09', status: 'Resolved', priority: 'High' },
    { id: 4, clientName: 'Global Services', subject: 'Communication Issue', description: 'Lack of updates', date: '2024-06-08', status: 'Closed', priority: 'Low' },
  ];

  const openComplaints = complaints.filter(c => c.status === 'Open').length;
  const resolvedComplaints = complaints.filter(c => c.status === 'Resolved').length;
  const resolutionRate = ((resolvedComplaints / complaints.length) * 100).toFixed(1);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
        🚨 Client Complaint Management
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Complaints
              </Typography>
              <Typography variant="h5">{complaints.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Open
              </Typography>
              <Typography variant="h5">{openComplaints}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Resolved
              </Typography>
              <Typography variant="h5">{resolvedComplaints}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Resolution Rate
              </Typography>
              <Typography variant="h5">{resolutionRate}%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.clientName}</TableCell>
                <TableCell>{complaint.subject}</TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>
                  <Chip
                    label={complaint.priority}
                    color={complaint.priority === 'High' ? 'error' : complaint.priority === 'Medium' ? 'warning' : 'success'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={complaint.status}
                    color={complaint.status === 'Resolved' ? 'success' : complaint.status === 'In Progress' ? 'primary' : complaint.status === 'Open' ? 'warning' : 'default'}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientComplaintManagement;