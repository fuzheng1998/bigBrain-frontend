import { nanoid } from 'nanoid';
import GameCard from './components/GameCard';
import Button from '../../components/Button';

/**
 * @description Game List page component that renders the game list, also named as Dashboard
 */
const GameList = [
  {
    id: nanoid(),
    title: 'Game 1',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 42,
    totalTime: 60,
    onClick: () => console.log('Game 1 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 2',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 12,
    totalTime: 30,
    onClick: () => console.log('Game 2 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 3',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 87,
    totalTime: 120,
    onClick: () => console.log('Game 3 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 4',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 23,
    totalTime: 45,
    onClick: () => console.log('Game 4 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 5',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 56,
    totalTime: 90,
    onClick: () => console.log('Game 5 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 6',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 34,
    totalTime: 75,
    onClick: () => console.log('Game 6 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 7',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 78,
    totalTime: 105,
    onClick: () => console.log('Game 7 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game 8',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 9,
    totalTime: 15,
    onClick: () => console.log('Game 8 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game9',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 50,
    totalTime: 60,
    onClick: () => console.log('Game9 clicked'),
  },
  {
    id: nanoid(),
    title: 'Game10',
    thumbnail: 'https://img.freepik.com/free-vector/meeting-question-concept-illustration_114360-18736.jpg?size=626&ext=jpg&ga=GA1.2.259791844.1690013828&semt=sph',
    numOfQuestions: 20,
    totalTime: 30,
    onClick: () => console.log('Game10 clicked'),
  },
];

function ListPage() {
  return (
    <div>
      <h1>Game Dashboard</h1>
      <Button onClick={() => console.log('Create Game clicked')}>Create Game</Button>
      <div className="grid grid-cols-3 gap-4">
        {GameList.map((
          {
            id,
            title,
            thumbnail,
            numOfQuestions,
            totalTime,
            onClick,
          },
        ) => (
          <GameCard
            key={id}
            title={title}
            thumbnail={thumbnail}
            numOfQuestions={numOfQuestions}
            totalTime={totalTime}
            onClick={() => onClick()}
          />
        ))}

      </div>
    </div>
  );
}
export default ListPage;
