async function sendRequest(route = '/', method = 'GET', data = undefined) {
    let init = { method: method, headers: {} };
    let token = localStorage.getItem('token');
    if (token !== null) {
        init.headers['x-access-token'] = token;
    }
    if (data !== undefined) {
        init.headers['Content-Type'] = 'application/json';
        init.body = JSON.stringify(data);
    }
    return fetch(`${process.env.REACT_APP_API_BASE_URL}${route}`, init)
        .then(x => x.json())
        .catch(err => console.log(err));
}

export const login = async (loginPass) => sendRequest('login', 'POST', loginPass);
export const register = async (user) => sendRequest('register', 'POST', user);
export const authorize = async () => sendRequest('authorize', 'POST');