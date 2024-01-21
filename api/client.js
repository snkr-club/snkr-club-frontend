import axios from 'axios'

/**
 * An async API Client that handles all errors and returns a uniform response.
 */
class ApiClient {
    #client

    constructor(apiRoot) {
        apiRoot = apiRoot.replace(/\/+$/, '');
        this.#client = axios.create({
            baseURL: apiRoot,
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization' header will be set dynamically for each request
            }
        });
    }

    async get({ resource, params = null }) {
        return this.#request('get', resource, { params, data: null })
    }

    async post({ resource, data = null, params = null }) {
        return this.#request('post', resource, { data, params })
    }

    async put({ resource, data = null, params = null }) {
        return this.#request('put', resource, { data, params })
    }

    async patch({ resource, data = null, params = null }) {
        return this.#request('patch', resource, { data, params })
    }

    async delete({ resource, data = null, params = null }) {
        return this.#request('delete', resource, { data, params })
    }

    async head({ resource, data = null, params = null }) {
        return this.#request('head', resource, { data, params })
    }

    async #request(method, resource, options) {
        const result = {
            data: null,
            errors: []
        };

        // Retrieve the JWT from localStorage for each request
        const jwt = localStorage.getItem('JWT');
        const authHeader = jwt ? `Bearer ${jwt}` : '';

        // Set up the headers for the axios request
        const headers = {
            ...this.#client.defaults.headers.common, // Keep the common headers
            'Authorization': authHeader // Add the Authorization header
        };

        try {
            const response = await this.#client({
                method: method,
                url: resource,
                headers: headers, // Use the headers with the Authorization
                params: options.params || {},
                data: options.data || {}
            });
            result.data = response.data;
        } catch (error) {
            // Error handling remains the same
            // ...
        }

        return result;
    }
}

export const apiClient = new ApiClient(import.meta.env.VITE_BASEURL)
