import { Question as QuestionType } from '../../types/question';
import Question from '../../pages/DetailPage/components/Question';

interface QuestionListProps {
  questions: QuestionType[];
}

/**
 * @description a list layout for question list including single question items
 */

function QuestionList({
  questions,
}: QuestionListProps) {
  return (
    <ul className="bg-yellow-400">
      {questions.map(({
        id,
        question,
        timeLimit,
        points,
        media,
        answers,
      }) => (
        <Question
          key={id}
          question={question}
          timeLimit={timeLimit}
          points={points}
          media={media}
          answers={answers}
        />
      ))}
    </ul>
  );
}
export default QuestionList;
