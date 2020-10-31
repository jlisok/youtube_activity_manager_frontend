import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./about/About";
import HomeWithLogin from "./home/HomeWithLogin";
import OpsSomethingWentWrong from "./commons/OpsSomethingWentWrong";
import {Layout} from "./commons/Layout";
import Dashboard from "./dashboard/Dashboard";
import HomeWithRegistration from "./home/HomeWithRegistration";
import YouTubeActivity from "./youtube/YouTubeActivity";
import Stats from "./stats/Stats";
import ConstructionSite from "./commons/ConstructionSite";

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <Layout>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={HomeWithLogin}/>
                            <Route exact path="/login" component={HomeWithLogin}/>
                            <Route exact path="/signUp" component={HomeWithRegistration}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route exact path="/youtube_activity" component={YouTubeActivity}/>
                            <Route exact path="/stats" component={Stats}/>
                            <Route exact path="/suggestions" component={ConstructionSite}/>
                            <Route component={OpsSomethingWentWrong}/>
                        </Switch>
                    </BrowserRouter>
                </Layout>
            </React.Fragment>
        </div>
    );
}

export default App;
