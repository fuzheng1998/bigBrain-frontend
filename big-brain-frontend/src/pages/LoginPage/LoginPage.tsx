import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "../../components/Header";

/**
 *
 * @description Login Page
 */

const LoginPage: React.FC = () => {
    return (
        <div>
            <Header isAuthenticated={false}/>
            <Header isAuthenticated={true}/>
            <h1>Login Page</h1>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;