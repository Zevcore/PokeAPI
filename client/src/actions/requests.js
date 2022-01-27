export const store = (data) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data.toString(),
        json: true,
    };

    return fetch("http://0.0.0.0:80/api/pokemons", options);
}

export const update = (data, id) => {

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data.toString(),
        json: true,
    };

    return fetch("http://0.0.0.0:80/api/pokemons/" + id, options);
}

// export const index = () => {
//     const options = {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'},
//     };
//
//     fetch("http://0.0.0.0:80/api/pokemons", options)
//         .then((response) => response.blob())
//         .then(data => {
//             return data;
//         })
//
//     console.log(data);
// }

export const index = () => {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return new Promise(resolve => {
        fetch("http://0.0.0.0:80/api/pokemons", options)
            .then(response => response.json())
            .then(
                (result) => {
                    resolve(result)
                }
            )
    })
}

export const destroy = (id) => {
    const options = {
        method: 'DELETE',
    };
    return fetch("http://0.0.0.0:80/api/pokemons/" + id, options);
}
