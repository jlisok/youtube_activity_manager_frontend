import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {NavigationBar} from "./commons/NavigationBar";
import About from "./about/About";
import HomeWithLogin from "./home/HomeWithLogin";
import OpsSomethingWentWrong from "./commons/OpsSomethingWentWrong";
import {Layout} from "./commons/Layout";
import Dashboard from "./dashboard/Dashboard";
import HomeWithRegistration from "./home/HomeWithRegistration";
import YouTubeActivity from "./youtube/YouTubeActivity";
import Stats from "./stats/Stats";

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <Layout>
                    <NavigationBar/>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={HomeWithLogin}/>
                            <Route exact path="/login" component={HomeWithLogin}/>
                            <Route exact path="/signUp" component={HomeWithRegistration}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route exact path="/youtube_activity" component={YouTubeActivity}/>
                            <Route exact path="/stats" component={Stats}/>
                            <Route component={OpsSomethingWentWrong}/>
                        </Switch>
                    </BrowserRouter>
                </Layout>
            </React.Fragment>
        </div>
    );
}

export default App;
