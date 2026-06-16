import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';

interface Operation {
  id: number;
  name: string;
  status: 'Completed' | 'In Progress' | 'Failed';
  progress: number;
}

const OperationsModule: React.FC = () => {
  const operations: Operation[] = [
    { id: 1, name: 'Security Audit', status: 'Completed', progress: 100 },
    { id: 2, name: 'Site Inspection', status: 'In Progress', progress: 65 },
    { id: 3, name: 'Equipment Check', status: 'Failed', progress: 30 },
    { id: 4, name: 'Staff Training', status: 'In Progress', progress: 50 },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon sx={{ color: 'green' }} />;
      case 'In Progress':
        return <PendingIcon sx={{ color: 'orange' }} />;
      case 'Failed':
        return <ErrorIcon sx={{ color: 'red' }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
        🛡️ Operations Module
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Completed
              </Typography>
              <Typography variant="h5">5</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                In Progress
              </Typography>
              <Typography variant="h5">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Failed
              </Typography>
              <Typography variant="h5">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Operations
              </Typography>
              <Typography variant="h5">{operations.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ marginTop: 3, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Operation Status
        </Typography>
        <List>
          {operations.map((op) => (
            <ListItem key={op.id}>
              <ListItemIcon>{getStatusIcon(op.status)}</ListItemIcon>
              <ListItemText
                primary={op.name}
                secondary={`Progress: ${op.progress}%`}
              />
              <Chip
                label={op.status}
                color={op.status === 'Completed' ? 'success' : op.status === 'In Progress' ? 'warning' : 'error'}
                variant="outlined"
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default OperationsModule;