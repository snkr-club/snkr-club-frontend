import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "~/api/api.js";

const toast = useToast()

export const useProductStore = defineStore('products', {
	state: () => ({
		products: [],
		availableSizes: [],
		selectedProduct: {
			title: "",
			subtitle: "",
			type: "",
			description: "",
			price: null,
			brand_id: null,
			collection_id: null,
			category_id: null,
			limited: false,
			parentid: null,
		},

		// Loadings
		getLoading: false,
		createLoading: false,
		updateLoading: false,
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
		},

		async update(product) {
			let updateError = null

			this.updateLoading = true
			const response = await api("PATCH", `/products/${product.id}`, {
				title: product.title,
				price: product.price,
				description: product.description,
				limited: product.limited,
				active: product.active,
				brandId: product.brandId,
				collectionId: product.collectionId,
				categoryId: product.categoryId,
				subtitle: product.subtitle,
				type: product.type,
			}).catch((err) => updateError = err)
			this.updateLoading = false


			if (updateError || !response.body) {
				toast.error(updateError ? updateError : "Eroare interna. Va rugam reincercati.")
				return null
			}

			toast.success(response.message)
			const index = this.products.indexOf(this.products.find(prod => prod.id === product.id))
			if (index !== -1) this.products[index] = response.body
			return response.body
		},

		async getProduct(productId){
			let getError = null

			const response = await api("GET", `/products/${productId}`)
				.catch((err) => getError = err)

			if (getError || !response.body) {
				toast.error(getError ? getError : "Eroare interna. Va rugam reincercati.")
				return null
			}

			this.selectedProduct = response.body
		},
	}
})
