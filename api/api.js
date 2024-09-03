
async function api(method, endpoint, payload) {


    // const authStore = useAuthStore()
    const BASE_URL = "http://185.104.181.219:9001"

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(BASE_URL + endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload ? JSON.stringify({
                    ...payload
                }) : null
            });

            if (response.ok) {
                const data = await response.json();

                // Check if the success property is true
                if (!data.success) {
                    if (data.message) reject(data.message)
                    else reject("Internal error. Please try again later.")
                } else {
                    resolve(data);
                }
            } else {
                reject(`Internal Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            reject(error.message);
        }
    });


}

export default api;
