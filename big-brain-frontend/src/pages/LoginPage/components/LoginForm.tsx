import { useState } from 'react';
import Button from '../../../components/Button';
/**
 * @description Login form component, inside LoginPage component
 *
 */

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    fetch('http://localhost:5005/admin/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      console.log('res: ', res);
      if (res.status === 200) {
        console.log('login successful');
      } else {
        console.log('login failed');
      }
    });
  };
  return (
    <div className="mx-52">
      <h1 className="text-2xl font-bold text-center">Login Form</h1>
      <form className="flex flex-col">
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={
            (e) => setEmail(e.target.value)
          }
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={
              (e) => setPassword(e.target.value)
            }
          />
        </label>
        <Button
          className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"
          variant="primary"
          onClick={() => handleClick()}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
export default LoginForm;
