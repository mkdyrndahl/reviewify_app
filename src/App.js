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
        id: '',
        login: '',
        role: '',
    });
    useEffect(() => {
        authorize().then(res => {
            if (res !== undefined && res.message === undefined) {
                setUser({
                    id: res._id,
                    login: res.login,
                    role: res.role
                });
            }
        });
    }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SearchPage user={user} />
                    </Route>
                    <Route exact path="/signin">
                        <SignIn setUser={setUser}/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/admin">
                        <ManageMovie user={user} />
                    </Route>
                    <Route exact path="/home">
                        <SearchPage user={user} />
                    </Route>
                    <Route exact path="/review/:movieId">
                        <ViewReviews user={user} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
