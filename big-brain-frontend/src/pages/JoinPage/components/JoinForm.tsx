/**
 * @description JoinForm component for JoinPage
 */
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';

function JoinForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Join a Game</h1>
      <form className="flex flex-col">
        <Input key="sessionCode" label="session ID" type="text" name="sessionId" className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2" />
        <Input key="username" label="username" type="text" name="username" className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2" />
        <Button
          className="my-3 mx-auto hover:underline hover:bg-white hover:text-zinc-800 hover:border-black hover:border-2"
          variant="primary"
          onClick={() => console.log('join a game')}
        >
          Join
        </Button>
      </form>
    </div>
  );
}
export default JoinForm;
