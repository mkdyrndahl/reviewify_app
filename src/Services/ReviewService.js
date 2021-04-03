export async function getReviews()  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}user/reviews`,   {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then((response) => response.json())
}

export async function getReviewRatio(id, username) {
    const data = JSON.stringify({"id" : id, "username" : username})
    const ratio = `Likes - ${data.likes} : Dislikes - ${data.dislikes}` 
    return fetch(`${process.env.REACT_APP_API_BASE_URL}user/reviews`, {
        method: "GET",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(ratio)
    }).then((response) => response.json())
}  

export async function addReview(newReview)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}user/reviews`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newReview)
    }).then((response) => response.json())
}

export async function likeReview(newLike)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}user/reviews`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newLike)
    }).then((response) => response.json())
}

export async function dislikeReview(newDislike)  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}user/reviews`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newDislike)
    }).then((response) => response.json())
}

export async function deleteReview(id, username)  {
    return(`${process.env.REACT_APP_API_BASE_URL}admin/reviews`,{
        method: "DELETE",
        headers: {"Content-Type" : "applicaiton/json"},
        body: JSON.stringify({"id" : id, "username" : username})
    }).then((response) => response.json())
}

