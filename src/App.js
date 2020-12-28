import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, blueGrey, green, grey } from '@material-ui/core/colors';

import FeedbackForm from './components/Feedback'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: blueGrey[500],
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    fontWeightBold: 'bold'
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FeedbackForm />
      </div>
    </ThemeProvider>

  );
}

export default App;
