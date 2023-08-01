import { Answer } from '../../../types/question';
import AnswerItem from './AnswerItem';

/**
 * @fileOverview answer option list, containing more than one option items
 */
interface AnswerListProps {
  answers:Answer[]
}
function AnswerList({
  answers,
}:AnswerListProps) {
  return (
    <ul>
      {answers.map(({
        id,
        answer,
        isCorrect,

      }) => (
        <AnswerItem key={id} answer={answer} isCorrect={isCorrect} />
      ))}
    </ul>
  );
}
export default AnswerList;
