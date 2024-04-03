const API_ID = "http://localhost:8000";

async function httpPostAddFavorite(id) {
    try {
        return await fetch(`${API_ID}/favorite/${id}`, {
            method: "post",
        })
    } catch (err) {
        return {
            error: err,
        };
    };
}

async function httpAddNewUser(user){
    try{
        return await fetch(`${API_ID}/register`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    } catch(err){
        return {
            error: err,
        }
    }
}

async function getFavoriteMovies() {
    try{
        const response = await fetch(`${API_ID}/favorite`);
        return await response.json();
    } catch(err){
        return {
            error: err
        };
    };
}


module.exports = {
    httpPostAddFavorite,
    getFavoriteMovies,
    httpAddNewUser,
}