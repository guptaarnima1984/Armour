import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface Lead {
  id: number;
  companyName: string;
  contactPerson: string;
  value: number;
  stage: 'Prospect' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  probability: number;
}

const BusinessDevelopmentModule: React.FC = () => {
  const leads: Lead[] = [
    { id: 1, companyName: 'ABC Corp', contactPerson: 'Mr. Smith', value: 100000, stage: 'Proposal', probability: 70 },
    { id: 2, companyName: 'XYZ Ltd', contactPerson: 'Ms. Johnson', value: 50000, stage: 'Qualified', probability: 40 },
    { id: 3, companyName: 'Tech Solutions', contactPerson: 'Mr. Brown', value: 75000, stage: 'Prospect', probability: 20 },
    { id: 4, companyName: 'Global Services', contactPerson: 'Ms. Davis', value: 150000, stage: 'Proposal', probability: 60 },
  ];

  const totalPipelineValue = leads.reduce((sum, lead) => sum + lead.value, 0);
  const weightedPipeline = leads.reduce((sum, lead) => sum + (lead.value * lead.probability / 100), 0);
  const wonDeals = leads.filter(l => l.stage === 'Won').length;

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Prospect': return 'info';
      case 'Qualified': return 'warning';
      case 'Proposal': return 'primary';
      case 'Won': return 'success';
      case 'Lost': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
        📈 Business Development Module
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Leads
              </Typography>
              <Typography variant="h5">{leads.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Pipeline Value
              </Typography>
              <Typography variant="h5">${(totalPipelineValue / 1000).toFixed(0)}K</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Weighted Pipeline
              </Typography>
              <Typography variant="h5">${(weightedPipeline / 1000).toFixed(0)}K</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Won Deals
              </Typography>
              <Typography variant="h5">{wonDeals}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Active Leads
        </Typography>
        <List>
          {leads.map((lead) => (
            <ListItem key={lead.id} sx={{ borderBottom: '1px solid #eee', paddingY: 2 }}>
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText
                primary={lead.companyName}
                secondary={`Contact: ${lead.contactPerson} | Value: $${lead.value.toLocaleString()}`}
              />
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LinearProgress variant="determinate" value={lead.probability} sx={{ width: 80 }} />
                <Chip label={lead.stage} color={getStageColor(lead.stage)} variant="outlined" />
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default BusinessDevelopmentModule;