import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

/**
 * @description The main App component, global layout for the entire app.
 */
function App() {
  return (
    <div className="App">
      <Header isAuthenticated={false} />
      <Outlet />
      {/* <LoginPage /> */}
      {/* <JoinPage /> */}
      {/* <RegisterPage /> */}
      {/* <ListPage /> */}
      {/* <DetailPage /> */}
    </div>
  );
}

export default App;
