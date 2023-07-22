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

const GameCard: React.FC<GameCardProps> = ({
    title,
    thumbnail,
    numOfQuestions,
    totalTime,
    onClick,
}) => {
    return (
        <div className={"group flex flex-col justify-center items-center hover:border-black hover:border cursor-pointer"}
        onClick={onClick}>
            <div className={"flex flex-col justify-center items-center"}>
                <h1 className={"text-2xl font-bold"}>{title}</h1>
                <img src={thumbnail} alt={title} className={"w-1/2"}/>
                <p className={"text-xl"}>{numOfQuestions} Questions</p>
                <p className={"text-xl"}>{totalTime} Seconds</p>
            </div>
        </div>
    );
}
export default GameCard;