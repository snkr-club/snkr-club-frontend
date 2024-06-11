import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
	state: () => ({
		products: []
	}),
	actions: {
		async find(idList = null) {
			this.products = []
			let errors, data
			await fetch("http://192.168.0.115:6969/products/search", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					idList: idList,
				}),
			}).then((res) => res.json()).then((jsonRes) => data = jsonRes).catch((err) => errors = err)
			if (!data.success) return "Eroare interna."
			if (!data.body.length) return 'Eroare interna'
			this.products = data.body
			console.log('Found products (cart)', this.products)
			if (errors) return errors
		}
	}
})
