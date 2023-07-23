/**
 * @description JoinForm component for JoinPage
 */
import Button from '../../../components/Button';

function JoinForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Join a Game</h1>
      <form className="flex flex-col">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="password">
          Password

          <input type="password" name="password" id="password" />
        </label>
        <Button
          className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"
          variant="primary"
          onClick={() => console.log('join a g`ame')}
        >
          Join
        </Button>
      </form>
    </div>
  );
}
export default JoinForm;
