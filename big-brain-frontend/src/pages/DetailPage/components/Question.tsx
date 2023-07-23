import {Answer} from "../../../types/question";

interface QuestionProps {
    question: string;
    timeLimit: number;
    points: number;
    media?: string;
    answers: Answer[];
}
/**
 * @description item component for single question in game detail page
 */

const Question = ({
                        question,
                        timeLimit,
                        points,
                        media,
                        answers
                    }: QuestionProps
) => {
    return (
        <li className={"border-2 border-black"}>
            <p>{question}</p>
            <p>{timeLimit}</p>
            <p>{points}</p>
            <p>{media}</p>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index} className={
                        answer.isCorrect ? "bg-green-400" : ""
                    }>
                        <p>{answer.answer}</p>
                    </li>
                ))}
            </ul>
        </li>
    )
}
export default Question;