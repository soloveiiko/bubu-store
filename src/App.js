import './App.css';
import { Footer, Header, Subscription } from './components';
import AppRoutes from './routes';

function App() {
  // const path = window.location.pathname;
  // if (path === '/signin' && '/signup') {
  //   return <AppRoutes />;
  // }
  return (
    <div className="bubu-store">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
