import CustomThemeProvider from './components/CustomThemeProvider';
import HomePage from './components/pages/HomePage';


function App() {
  return (
    <CustomThemeProvider>
      <HomePage />
    </CustomThemeProvider>
  );
}

export default App;
