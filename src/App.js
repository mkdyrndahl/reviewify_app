import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManageMovie from './Components/ManageMovies/ManageMovies';
import ViewReviews from './Components/ViewReviews/ViewReviews';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/admin" exact component={ManageMovie}/>
                    <Route path="/review" exact component={ViewReviews}/>
                    <Route path="/" exact component={ViewReviews}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
