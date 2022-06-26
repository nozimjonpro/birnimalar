import React from "react";
import Main from "./Pages/Main/Main";
import './App.scss';
import Navigation from "./components/Navigation/Navigation";

function AuthenticatedApp(){
    return (
        <div className="container">
            <Navigation></Navigation>
            <Main></Main>
        </div>
    )
}


export default AuthenticatedApp