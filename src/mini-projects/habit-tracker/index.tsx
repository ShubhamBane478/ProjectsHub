import { Box, Container, Typography } from '@mui/material';
import HabitTrackerForm from './components/habit-tracker-form';
import HabitList from './components/habitList';
import HabitStats from './components/habitStats';

const HabitTracker = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: 'left' }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>

          <HabitTrackerForm />
          <HabitList />
          <HabitStats />
        </Box>
      </Container>
    </>
  );
};
export default HabitTracker;
