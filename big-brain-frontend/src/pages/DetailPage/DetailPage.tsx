import { Question } from '../../types/question';
import QuestionList from '../../components/QuestionList';

interface DetailPageProps {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
/**
 * @description DetailPage for one specific game, including game metadata and question list.
 */
function DetailPage({
  id,
  title,
  description,
  questions,
}: DetailPageProps) {
  return (
    <div>
      <h1>DetailPage</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <QuestionList questions={questions} key={id} />
    </div>
  );
}
export default DetailPage;
