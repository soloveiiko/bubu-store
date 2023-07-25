import './App.css';
import { Footer, Header } from './components';
import AppRoutes from './routes';

function App() {
  return (
    <div className="bubu-store">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
