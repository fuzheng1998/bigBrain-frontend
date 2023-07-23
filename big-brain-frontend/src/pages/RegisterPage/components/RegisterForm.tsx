import Button from '../../../components/Button';
/**
 * @description Register form component that renders the user input fields
 */
function RegisterForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Game Editor Register</h1>
      <form className="flex flex-col">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </label>

        <Button
          className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"
          variant="primary"
          onClick={() => {}}
        >
          Register
        </Button>
      </form>
    </div>
  );
}
export default RegisterForm;
