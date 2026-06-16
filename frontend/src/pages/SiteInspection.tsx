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
  CardMedia,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';

interface Inspection {
  id: number;
  siteName: string;
  date: string;
  inspector: string;
  status: 'Completed' | 'Pending' | 'Failed';
  issues: number;
  imageUrl?: string;
}

const SiteInspection: React.FC = () => {
  const [inspections, setInspections] = useState<Inspection[]>([
    { id: 1, siteName: 'Site A - North', date: '2024-06-10', inspector: 'John Doe', status: 'Completed', issues: 0 },
    { id: 2, siteName: 'Site B - South', date: '2024-06-10', inspector: 'Jane Smith', status: 'Pending', issues: 2 },
    { id: 3, siteName: 'Site C - East', date: '2024-06-09', inspector: 'Bob Johnson', status: 'Failed', issues: 5 },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newInspection, setNewInspection] = useState({ siteName: '', inspector: '', notes: '' });

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4">📸 Site Inspection</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>
          New Inspection
        </Button>
      </Box>

      <Grid container spacing={3}>
        {inspections.map((inspection) => (
          <Grid item xs={12} sm={6} md={4} key={inspection.id}>
            <Card>
              <CardMedia
                sx={{ height: 200, backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <CameraAltIcon sx={{ fontSize: 48, color: '#999' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {inspection.siteName}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Inspector: {inspection.inspector}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Date: {inspection.date}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                  <Chip
                    label={inspection.status}
                    color={inspection.status === 'Completed' ? 'success' : inspection.status === 'Pending' ? 'warning' : 'error'}
                    variant="outlined"
                  />
                  <Chip label={`Issues: ${inspection.issues}`} variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>New Site Inspection</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Site Name"
            fullWidth
            variant="outlined"
            value={newInspection.siteName}
            onChange={(e) => setNewInspection({ ...newInspection, siteName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Inspector"
            fullWidth
            variant="outlined"
            value={newInspection.inspector}
            onChange={(e) => setNewInspection({ ...newInspection, inspector: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Notes"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={newInspection.notes}
            onChange={(e) => setNewInspection({ ...newInspection, notes: e.target.value })}
          />
          <Button variant="outlined" startIcon={<CameraAltIcon />} fullWidth sx={{ marginTop: 2 }}>
            Capture Image
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SiteInspection;