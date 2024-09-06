import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "~/api/api.js";

const toast = useToast()

export const useProductStore = defineStore('products', {
	state: () => ({
		products: [],
		availableSizes: [],
		selectedProduct: null,

		// Loadings
		getLoading: false,
		createLoading: false,
	}),
	actions: {
		// async find(type = null, idList = null) {
		// 	this.products = []
		// 	let errors, data
		// 	console.log(type)
		// 	await fetch("http://192.168.0.115:6969/products/search", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json"
		// 		},
		// 		body: JSON.stringify({
		// 			type: type,
		// 			idList: idList,
		// 		}),
		// 	}).then((res) => res.json()).then((jsonRes) => data = jsonRes).catch((err) => errors = err)
		// 	if (!data.success) return "Eroare interna."
		// 	if (!data.body.length) return 'Eroare interna'
		// 	if (idList && idList.length === 1) this.selectedProduct = data.body[0]
		// 	else this.products = data.body
		// 	this.availableSizes = data.available_sizes
		// 	console.log('Found products', this.products)
		// 	console.log('Found sizes', this.availableSizes)
		// 	if (errors) return errors
		// }

		async getAll() {
			let getError = null

			this.getLoading = true
			const response = await api("GET", "/products")
				.catch((err) => getError = err)
			this.getLoading = false

			if (getError) return toast.error(getError)

			this.products = response.body
		},

		async create(product) {
			let createError = null

			this.createLoading = true
			const response = await api("POST", "/products/create", {
				...product
			}).catch((err) => createError = err)
			this.createLoading = false

			if (createError || !response.body) {
				toast.error(createError ? createError : "Eroare interna. Va rugam reincercati.")
				return null
			}

			toast.success(response.message)
			this.products = [...this.products, response.body]
			return response.body
		}
	}
})
