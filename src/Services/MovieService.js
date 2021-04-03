export async function getMovies() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/movies`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then((response) => response.json());
}


export async function addMovieToServer(newMovie){
    const data = JSON.stringify(newMovie);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data
    }).then((response) => response.json())
}

export async function updateMovieToServer(updatedMovie) {
    const data = JSON.stringify(updatedMovie);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/movies`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: data
    }).then((response) => response.json());
}

export async function deleteMovieFromServer(id) {
    const data = JSON.stringify({ "id": id });
    console.log(data);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/movies`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: data
    }).then((response) => response.json());
}

export async function uploadImage(formData) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}uploadImage`, {
        method: 'POST',
        body: formData
    }).then((res) => res.json())
}