const APP_API_URL = "http://localhost:8000/";

export async function getMovies(){
    return fetch(`${REACT_APP_API_BASE_URL}admin/movies`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then((response) => response.json());

    // return fetch(`${APP_API_URL}admin/movies`, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json"}
    // }).then((response) => response.json());
}

export async function addMovieToServer(newMovie){
    const data = JSON.stringify(newMovie);
    return fetch(`${REACT_APP_API_BASE_URL}admin/movies`,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: data
    }).then((response) => response.json());

    // return fetch(`${APP_API_URL}admin/movies`,{
    //     method: "POST",
    //     headers: {"Content-Type":"application/json"},
    //     body: data
    // }).then((response) => response.json());
}


export async function uploadImage(formData){
    return fetch(`${REACT_APP_API_BASE_URL}uploadImage`,{
        method: 'POST',
        body: formData
    }).then((res) => res.json());

    // return fetch(`${APP_API_URL}uploadImage`,{
    //     method: 'POST',
    //     body: formData
    // }).then((res) => res.json());
}