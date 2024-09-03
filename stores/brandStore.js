import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "../api/api.js";

const toast = useToast()

export const useBrandStore = defineStore('brands', {
	state: () => ({
		brands: [],

		getBrandsLoading: false,
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
	}
})
