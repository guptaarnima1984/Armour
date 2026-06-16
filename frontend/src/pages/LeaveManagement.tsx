import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
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
  LinearProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Leave {
  id: number;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

interface LeaveBalance {
  employeeName: string;
  casual: number;
  sick: number;
  earned: number;
}

const LeaveManagement: React.FC = () => {
  const [leaves, setLeaves] = useState<Leave[]>([
    { id: 1, employeeName: 'John Doe', leaveType: 'Casual', startDate: '2024-06-20', endDate: '2024-06-22', days: 3, status: 'Approved' },
    { id: 2, employeeName: 'Jane Smith', leaveType: 'Sick', startDate: '2024-06-17', endDate: '2024-06-18', days: 2, status: 'Pending' },
    { id: 3, employeeName: 'Bob Johnson', leaveType: 'Earned', startDate: '2024-06-25', endDate: '2024-07-02', days: 8, status: 'Pending' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);

  const leaveBalances: LeaveBalance[] = [
    { employeeName: 'John Doe', casual: 12, sick: 5, earned: 15 },
    { employeeName: 'Jane Smith', casual: 8, sick: 3, earned: 20 },
    { employeeName: 'Bob Johnson', casual: 10, sick: 4, earned: 18 },
  ];

  const pendingLeaves = leaves.filter(l => l.status === 'Pending').length;
  const approvedLeaves = leaves.filter(l => l.status === 'Approved').length;

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4">📅 Leave Management</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>
          Apply Leave
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Applications
              </Typography>
              <Typography variant="h5">{leaves.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Pending
              </Typography>
              <Typography variant="h5">{pendingLeaves}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Approved
              </Typography>
              <Typography variant="h5">{approvedLeaves}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Approval Rate
              </Typography>
              <Typography variant="h5">{((approvedLeaves / leaves.length) * 100).toFixed(0)}%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Leave Balance
        </Typography>
        {leaveBalances.map((balance) => (
          <Box key={balance.employeeName} sx={{ marginBottom: 2 }}>
            <Typography variant="body2" gutterBottom>
              {balance.employeeName}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box sx={{ marginBottom: 1 }}>
                  <Typography variant="caption">Casual: {balance.casual}</Typography>
                  <LinearProgress variant="determinate" value={(balance.casual / 20) * 100} />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ marginBottom: 1 }}>
                  <Typography variant="caption">Sick: {balance.sick}</Typography>
                  <LinearProgress variant="determinate" value={(balance.sick / 10) * 100} />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ marginBottom: 1 }}>
                  <Typography variant="caption">Earned: {balance.earned}</Typography>
                  <LinearProgress variant="determinate" value={(balance.earned / 30) * 100} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Days</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.employeeName}</TableCell>
                <TableCell>{leave.leaveType}</TableCell>
                <TableCell>{leave.startDate}</TableCell>
                <TableCell>{leave.endDate}</TableCell>
                <TableCell>{leave.days}</TableCell>
                <TableCell>
                  <Chip
                    label={leave.status}
                    color={leave.status === 'Approved' ? 'success' : leave.status === 'Pending' ? 'warning' : 'error'}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Apply for Leave</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Leave Type"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Reason"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LeaveManagement;