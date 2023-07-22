import "./App.css";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";

/**
 * @description The main App component, global layout for the entire app.
 */
function App() {
    return (
        <div className="App">
            <LoginPage/>
            <JoinPage/>
        </div>
    );
}

export default App;
