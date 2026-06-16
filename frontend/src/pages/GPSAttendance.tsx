import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface AttendanceRecord {
  id: number;
  name: string;
  checkInTime: string;
  checkOutTime: string | null;
  location: string;
  status: 'Present' | 'Absent' | 'Late';
  accuracy: number;
}

const GPSAttendance: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([
    { id: 1, name: 'John Doe', checkInTime: '09:00 AM', checkOutTime: null, location: 'Site A', status: 'Present', accuracy: 95 },
    { id: 2, name: 'Jane Smith', checkInTime: '09:15 AM', checkOutTime: null, location: 'Site B', status: 'Late', accuracy: 98 },
    { id: 3, name: 'Bob Johnson', checkInTime: null, checkOutTime: null, location: '-', status: 'Absent', accuracy: 0 },
  ]);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4">📍 GPS Attendance</Typography>
        <Button variant="contained" startIcon={<LocationOnIcon />}>
          Check In
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Present Today
              </Typography>
              <Typography variant="h5">18</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Late
              </Typography>
              <Typography variant="h5">2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Absent
              </Typography>
              <Typography variant="h5">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Average Accuracy
              </Typography>
              <Typography variant="h5">96%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Accuracy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendance.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.checkInTime}</TableCell>
                <TableCell>{record.checkOutTime || '-'}</TableCell>
                <TableCell>{record.location}</TableCell>
                <TableCell>
                  <Chip
                    label={record.status}
                    color={record.status === 'Present' ? 'success' : record.status === 'Late' ? 'warning' : 'error'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{record.accuracy}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GPSAttendance;