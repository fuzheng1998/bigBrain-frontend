import { QType } from '../../types/question';
import QuestionList from '../../components/QuestionList';

/**
 * @description DetailPage for one specific game, including game metadata and question list.
 */
function DetailPage() {
  //   data fetched from backend should be used here
  const {
    id,
    title,
    description,
    questions,
  } = {
    id: '101',
    title: 'Product XYZ',
    description: 'This is a detailed description of Product XYZ.',
    questions: [
      {
        id: '1',
        type: QType.SINGLE,
        question: 'What is the capital of France?',
        timeLimit: 10,
        points: 100,
        media: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
        answers: [
          {
            id: '1',
            answer: 'Paris',
            isCorrect: true,
          },
          {
            id: '2',
            answer: 'Berlin',
            isCorrect: false,
          },
        ],
      },
    ],
  };
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
