import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import ManageMovie from './Components/Admin-ManageMovies/Admin-ManageMovies';
import { authorize } from './Services/AuthService';
import ViewReviews from './Components/ViewReviews/ViewReviews';
import SignIn from './Components/SignIn/SignIn';
import SignUp from "./Components/SignUp/SignUp";
import SearchPage from "./Components/SearchPage/SearchPage";

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
                    <Route path="/" exact component={SearchPage}/>     
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/admin" exact component={ManageMovie}/>
                    <Route path="/review" exact component={ViewReviews}/>
                    <Route path="/home" exact component={SearchPage}/>
                    
                </Switch>
            </Router>

        </div>
    );
}

export default App;
