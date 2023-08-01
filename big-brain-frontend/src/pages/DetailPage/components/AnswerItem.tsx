interface AnswerItemProps {
    isCorrect:boolean,
    answer:string
}
function AnswerItem({ isCorrect, answer }:AnswerItemProps) {
    return (
        <li
            className={
                isCorrect ? 'bg-green-400' : ''
            }
        >
            <p>{answer}</p>
        </li>
    );
}
export default AnswerItem