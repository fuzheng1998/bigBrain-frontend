import React from "react";
/**
 * @description Login form component, inside LoginPage component
 * 
 * @todo Implement login form
 */

const LoginForm: React.FC = () => {
  return <div className={"mx-auto"}>
    <h1 className={"text-2xl font-bold text-center"}>Login Form</h1>
    <form className={'flex flex-col'}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit" className={
        "my-3 mx-auto border-2 bg-white text-zinc-800 rounded-md px-4 py-2 font-semibold border-black hover:border-black hover:bg-zinc-800 hover:text-white"
      }>Login</button>
    </form>
  </div>;
};
export default LoginForm;
