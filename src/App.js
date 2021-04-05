import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import ManageMovie from './Components/ManageMovies/ManageMovies';
import { authorize } from './Services/AuthService';
import ViewReviews from './Components/ViewReviews/ViewReviews';
import SignIn from './Components/SignIn/SignIn';
import SignUp from "./Components/SignUp/SignUp";

function App() {
    const [user, setUser] = useState({
        login: '',
        role: '',
    });
    useEffect(() => {
        authorize().then(res => {
            if (res.message === undefined) {
                setUser({ login: res.login, role: res.role });
            }
        });
    }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={ViewReviews}/>     
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/admin" exact component={ManageMovie}/>
                    <Route path="/review" exact component={ViewReviews}/>
                    
                </Switch>
            </Router>

        </div>
    );
}

export default App;
