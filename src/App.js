import './App.css';
import { Footer, Header, Subscription } from './components';
import AppRoutes from './routes';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const isSignInOrSignUp = path === '/signin' || path === '/signup';
    setShowHeaderFooter(!isSignInOrSignUp);
  }, [showHeaderFooter, window.location.pathname]);
  return (
    <div className="bubu-store">
      {showHeaderFooter ? (
        <>
          <Header location={location} />
          <div className="content">
            <AppRoutes />
          </div>
          <Subscription />
          <Footer />
        </>
      ) : (
        <>
          <AppRoutes />
        </>
      )}
    </div>
  );
}

export default App;
