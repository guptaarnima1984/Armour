import React from 'react';
import {
  Box,
  Button,
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
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';

interface Document {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadDate: string;
  category: string;
  status: 'Active' | 'Archived';
}

const DocumentManagement: React.FC = () => {
  const documents: Document[] = [
    { id: 1, name: 'Contract_ABC_Corp.pdf', type: 'PDF', size: '2.5 MB', uploadedBy: 'John Doe', uploadDate: '2024-06-10', category: 'Contracts', status: 'Active' },
    { id: 2, name: 'Project_Report_2024.docx', type: 'DOCX', size: '1.2 MB', uploadedBy: 'Jane Smith', uploadDate: '2024-06-11', category: 'Reports', status: 'Active' },
    { id: 3, name: 'Budget_Proposal.xlsx', type: 'XLSX', size: '856 KB', uploadedBy: 'Bob Johnson', uploadDate: '2024-06-09', category: 'Finance', status: 'Active' },
    { id: 4, name: 'Old_Archive_2023.zip', type: 'ZIP', size: '15 MB', uploadedBy: 'Admin', uploadDate: '2024-01-15', category: 'Archive', status: 'Archived' },
  ];

  const activeDocuments = documents.filter(d => d.status === 'Active').length;
  const archivedDocuments = documents.filter(d => d.status === 'Archived').length;

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Typography variant="h4">📂 Document Management</Typography>
        <Button variant="contained" startIcon={<UploadIcon />}>
          Upload Document
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Documents
              </Typography>
              <Typography variant="h5">{documents.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active
              </Typography>
              <Typography variant="h5">{activeDocuments}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Archived
              </Typography>
              <Typography variant="h5">{archivedDocuments}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Size
              </Typography>
              <Typography variant="h5">~19.5 MB</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Uploaded By</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>{doc.category}</TableCell>
                <TableCell>{doc.uploadedBy}</TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell>
                  <Chip
                    label={doc.status}
                    color={doc.status === 'Active' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Button size="small" startIcon={<DownloadIcon />}>Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DocumentManagement;