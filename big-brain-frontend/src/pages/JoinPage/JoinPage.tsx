/**
 * @description JoinPage component which is the page for joining a session
 *
 *
 */
import Header from "../../components/Header";
import React from "react";
import JoinForm from "./components/JoinForm";

const JoinPage = () => {
    return (
        <div>
            <Header isAuthenticated={false}/>
            <Header isAuthenticated={true}/>
            <h1>Join Page</h1>
            <JoinForm/>
        </div>
    )
}
export default JoinPage;