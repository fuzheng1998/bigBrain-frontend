import React from "react";
import Button from "../../../components/Button";
/**
 * @description Login form component, inside LoginPage component
 *
 */

const LoginForm: React.FC = () => {
  return <div className={"mx-52"}>
    <h1 className={"text-2xl font-bold text-center"}>Login Form</h1>
    <form className={'flex flex-col'}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <Button className={"my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"} variant={"primary"}>Login</Button>
    </form>
  </div>;
};
export default LoginForm;
