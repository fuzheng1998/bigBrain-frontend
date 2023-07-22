import "./App.css";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import RegisterPage from "../pages/RegisterPage";
import ListPage from "../pages/ListPage";

/**
 * @description The main App component, global layout for the entire app.
 */
function App() {
    return (
        <div className="App">
            <LoginPage/>
            <JoinPage/>
            <RegisterPage/>
            <ListPage/>
        </div>
    );
}

export default App;
