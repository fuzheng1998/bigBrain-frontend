import LoginForm from './components/LoginForm';
import Header from '../../components/Header';

/**
 *
 * @description Login Page
 */
function LoginPage() {
  return (
    <div>
      <Header isAuthenticated={false} />
      <Header isAuthenticated />
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}
export default LoginPage;
