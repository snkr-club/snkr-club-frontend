import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "../api/api.js";

const toast = useToast()

export const useBrandStore = defineStore('brands', {
	state: () => ({
		brands: [],

		getBrandsLoading: false,
		createBrandLoading: false,
	}),
	actions: {
		async getAll() {
			let getBrandsError = null

			this.getBrandsLoading = true
			const response = await api("GET", "/brands")
				.catch((err) => getBrandsError = err)

			if (getBrandsError) return toast.error(getBrandsError)

			this.brands = response.body
			this.getBrandsLoading = false
		},

		async create(name, description) {
			let createBrandError = null

			this.createBrandLoading = true
			const response = await api("POST", "/brands", {
				name,
				description
			}).catch((err) => createBrandError = err)

			if (createBrandError || !response.body)
				return toast.error(
					createBrandError
					? createBrandError
					: "Eroare interna"
				)

			toast.success(response.message)
			this.brands = [...this.brands, response.body]
			this.createBrandLoading = false
		},
	}
})
