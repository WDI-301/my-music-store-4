import CustomThemeProvider from './components/CustomThemeProvider';
import Layout from './components/Layout';

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        Home page
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
