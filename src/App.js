import './App.css';
import { Dashboard } from './Dashboard';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export const BorderLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 12,
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221, 36%, 91%)"
  },
  [`& .${linearProgressClasses.bar}`]: {
    //borderRadius: 5,
    backgroundColor: lineColor
  },
}));

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
