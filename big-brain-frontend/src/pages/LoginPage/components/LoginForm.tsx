import React from "react";
/**
 * @description Login form component, inside LoginPage component
 * 
 * @todo Implement login form
 */

const LoginForm: React.FC = () => {
  return <div>
    <h1>Login Form</h1>
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  </div>;
};
export default LoginForm;
