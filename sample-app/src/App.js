import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import RootComponent from './RootComponent';
import { CssBaseline } from '@mui/material';
import { Avatar } from '@mui/material';

const CustomSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

function App() {
  return (
    <Box className="App">
      <CssBaseline />
      <RootComponent>
        <Box className='App-header'>
          <Avatar src={logo} className="App-logo" alt="logo" sx={{ pointerEvents: 'none', ml: 1, mr: 1}} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </Box>
        <Box className='Contents-box'>
          <Box sx={{ width: '50%', backgroundColor: 'gray' }}>
            <CustomSlider defaultValue={30} />
          </Box>
        </Box>
      </RootComponent>
    </Box>
  );
}

export default App;
