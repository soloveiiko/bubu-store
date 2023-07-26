import './App.css';
import { Footer, Header } from './components';
import AppRoutes from './routes';

function App() {
  return (
    <div className="bubu-store">
      <Header />
      <div className="content">
        <div className="container">
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
