// import router from "nuxt/dist/app/plugins/router.js";
// import {useToast} from "vue-toastification";
const router = useRouter()
// const toast = useToast()

async function api(method, endpoint, payload) {

    const logout = async () => {
        localStorage.clear()
        await router.push('/login')
    }

    const BASE_URL = "http://192.168.0.115:6969"

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(BASE_URL + endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session: JSON.parse(localStorage.getItem('user')).session,
                    ...payload
                })
            });

            if (response.ok) {
                const data = await response.json();

                // Check if the status property is not 'success'
                if (data.status && data.status !== 'success' ) {
                    if(router.currentRoute.value.name === 'signup') {
                        reject(`Va rugam verificati daca datele introduse sunt corecte`)
                    } else {
                        if (endpoint === "login.php") {
                            reject(`Eroare de autentificare.`);
                        } else if(data.cod && data.cod === "-3") {
                            reject(`Sesiunea a expirat! Va rugam sa va conectati din nou.`);
                            await logout()
                        } else {
                            reject(data.message)
                            // toast.error(data.message)
                        }
                    }
                } else {
                    resolve(data);
                }
            } else {
                reject(`Eroare: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            reject(error.message);
        }
    });


}

export default api;
