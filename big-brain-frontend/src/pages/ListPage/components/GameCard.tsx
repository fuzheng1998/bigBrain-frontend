interface GameCardProps {
  title: string;
  thumbnail: string;
  numOfQuestions: number;
  totalTime: number;
  onClick?: () => void;
}

/**
 * @description Game Card component that renders one game information,
 * showing the title, number of questions, a thumbnail, and total time to complete
 */

function GameCard({
  title,
  thumbnail,
  numOfQuestions,
  totalTime,
  onClick = () => {},
}:GameCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div
      className="group flex flex-col justify-center items-center hover:border-black hover:border cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="self-end hover:text-white hover:bg-zinc-800"
        onClick={() => alert('would you like to delete it?')}
      >
        X
      </button>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <img src={thumbnail} alt={title} className="w-1/2" />
        <p className="text-xl">
          {numOfQuestions}
          {' '}
          Questions
        </p>
        <p className="text-xl">
          {totalTime}
          {' '}
          Seconds
        </p>
      </div>
    </div>
  );
}
export default GameCard;
