/**
 * @description JoinPage component which is the page for joining a session
 *
 *
 */
import Header from '../../components/Header';
import JoinForm from './components/JoinForm';

function JoinPage() {
  return (
    <div>
      <Header isAuthenticated={false} />
      <Header isAuthenticated />
      <h1>Join Page</h1>
      <JoinForm />
    </div>
  );
}
export default JoinPage;
