import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "../api/api.js";

const toast = useToast()

export const useBrandStore = defineStore('brands', {
	state: () => ({
		brands: [],

		getBrandsLoading: false,
		createBrandLoading: false,
		updateBrandLoading: false,
		deleteBrandLoading: false,
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

		async update(brandId, name, description) {
			let updateBrandError = null

			const response = await api("PUT", `/brands/${brandId}`, {
				name,
				description
			}).catch((err) => updateBrandError = err)

			if (updateBrandError || !response.body)
				return toast.error(
					updateBrandError
					? updateBrandError
					: "Eroare interna"
				)

			toast.success(response.message)
			const index = this.brands.indexOf(this.brands.find(item => item.id === brandId))
			this.brands[index] = response.body
		},

		async delete(brandId) {
			let deleteBrandError = null

			this.deleteBrandLoading = true
			const response = await api("DELETE", `/brands/${brandId}`)
				.catch((err) => deleteBrandError = err)

			if (deleteBrandError) return toast.error(deleteBrandError)

			this.deleteBrandLoading = false
			toast.success(response.message)
			this.brands = this.brands.filter(item => item.id !== brandId)
		},
	}
})
