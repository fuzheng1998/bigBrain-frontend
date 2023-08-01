import { Answer } from '../../../types/question';
import AnswerList from './AnswerList';

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

function Question({
  question,
  timeLimit,
  points,
  media = '',
  answers,
}: QuestionProps) {
  return (
    <li className="border-2 border-black mx-5 my-4">
      <p>{question}</p>
      <p>{timeLimit}</p>
      <p>{points}</p>
      <p>{media}</p>
      <AnswerList answers={answers} />
    </li>
  );
}
export default Question;
