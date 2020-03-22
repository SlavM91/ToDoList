import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./component/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path={"/"} exact component={Main}/>
                    <Route path={"/about"} component={About}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
