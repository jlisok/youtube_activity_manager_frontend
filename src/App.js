import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {NavigationBar} from "./commons/NavigationBar";
import About from "./about/About";
import HomeWithLogin from "./home/HomeWithLogin";
import OpsSomethingWentWrong from "./commons/OpsSomethingWentWrong";
import {Layout} from "./commons/Layout";
import Dashboard from "./dashboard/Dashboard";
import HomeWithRegistration from "./home/HomeWithRegistration";

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <Layout>
                    <NavigationBar/>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={HomeWithLogin}/>
                            <Route path="/login" component={HomeWithLogin}/>
                            <Route path="/signUp" component={HomeWithRegistration}/>
                            <Route path="/about" component={About}/>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route component={OpsSomethingWentWrong}/>
                        </Switch>
                    </BrowserRouter>
                </Layout>
            </React.Fragment>
        </div>
    );
}

export default App;
