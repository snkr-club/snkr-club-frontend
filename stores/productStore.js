import {defineStore} from "pinia";

export const useProductStore = defineStore('products', {
	state: () => ({
		products: [],
		availableSizes: [],
		selectedProduct: null
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

		async create(product) {
			let createError
		}
	}
})
