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
        <div className="container">
          <AppRoutes />
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
