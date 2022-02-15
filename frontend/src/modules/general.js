const exeFetch = (url, options = {}, navigate = () => { }) => {
    return fetch(url, options)
        .then(async (res) => {
            if (res.ok) {
                return {
                    body: await res.json(),
                }
            }
            else if (res.status == 401) {
                throw { body: await res.json(), ...(navigate() || {}) }
            }
            else {
                throw { err: res.status,body: await res.json(), ...(navigate() || {}) }
            }
        })
}


export {
    exeFetch
}