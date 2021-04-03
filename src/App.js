import { useState, useEffect } from 'react';
import ManageMovie from './Components/ManageMovies/ManageMovies';
import { authorize } from './Services/AuthService';

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
            <ManageMovie />
        </div>
    );
}

export default App;
