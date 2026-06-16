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
  Paper,
  Chip,
} from '@mui/material';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
  date: string;
  category: string;
}

const AccountsModule: React.FC = () => {
  const transactions: Transaction[] = [
    { id: 1, description: 'Project Revenue', amount: 50000, type: 'Income', date: '2024-06-01', category: 'Sales' },
    { id: 2, description: 'Employee Salary', amount: 15000, type: 'Expense', date: '2024-06-05', category: 'Payroll' },
    { id: 3, description: 'Equipment Purchase', amount: 5000, type: 'Expense', date: '2024-06-08', category: 'Supplies' },
    { id: 4, description: 'Service Revenue', amount: 30000, type: 'Income', date: '2024-06-10', category: 'Services' },
  ];

  const totalIncome = transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
  const netProfit = totalIncome - totalExpense;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
        💰 Accounts Module
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Income
              </Typography>
              <Typography variant="h5" sx={{ color: 'green' }}>
                ${totalIncome.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Expense
              </Typography>
              <Typography variant="h5" sx={{ color: 'red' }}>
                ${totalExpense.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Net Profit
              </Typography>
              <Typography variant="h5" sx={{ color: netProfit >= 0 ? 'green' : 'red' }}>
                ${netProfit.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Profit Margin
              </Typography>
              <Typography variant="h5">
                {((netProfit / totalIncome) * 100).toFixed(1)}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={transaction.type}
                    color={transaction.type === 'Income' ? 'success' : 'error'}
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

export default AccountsModule;