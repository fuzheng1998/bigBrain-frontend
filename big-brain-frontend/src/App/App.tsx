import "./App.css";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import RegisterPage from "../pages/RegisterPage";
import ListPage from "../pages/ListPage";
import DetailPage from "../pages/DetailPage";
import {QType} from "../types/question";

/**
 * @description The main App component, global layout for the entire app.
 */
function App() {

    const data1 = {
        id: "101",
        title: "Product XYZ",
        description: "This is a detailed description of Product XYZ.",
        questions: [
            {
                type: QType.SINGLE,
                question: "What is the capital of France?",
                timeLimit: 10,
                points: 100,
                media: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
                answers: [
                    {
                        answer: "Paris",
                        isCorrect: true
                    },
                    {
                        answer: "Berlin",
                        isCorrect: false
                    },
                ],
            },
            {
                type: QType.MULTIPLE,
                question: "Which of the following are programming languages?",
                timeLimit: 10,
                points: 100,
                media: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
                answers: [
                    {
                        answer: "HTML",
                        isCorrect: false
                    },
                    {
                        answer: "CSS",
                        isCorrect: false
                    },
                    {
                        answer: "JavaScript",
                        isCorrect: true
                    },
                    {
                        answer: "TypeScript",
                        isCorrect: true
                    },
                ],
            }
        ]
    }

    return (
        <div className="App">
            <LoginPage/>
            <JoinPage/>
            <RegisterPage/>
            <ListPage/>
            <DetailPage id={data1.id} title={data1.title} description={data1.description} questions={data1.questions}/>
        </div>
    );
}

export default App;
