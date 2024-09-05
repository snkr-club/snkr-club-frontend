import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "../api/api.js";

const toast = useToast()

export const useCategoryStore = defineStore('category', {
	state: () => ({
		categories: [],

		getLoading: false,
		createLoading: false,
		updateLoading: false,
		deleteLoading: false,
	}),
	actions: {
		async getAll() {
			let getError = null

			this.getLoading = true
			const response = await api("GET", "/categories")
				.catch((err) => getError = err)

			if (getError) return toast.error(getError)

			this.categories = response.body
			this.getLoading = false
		},

		async create(name, description, brandId) {
			let createError = null

			this.createLoading = true
			const response = await api("POST", "/categories", {
				name,
				description,
				brandId
			}).catch((err) => createError = err)

			if (createError || !response.body)
				return toast.error(
					createError
					? createError
					: "Eroare interna"
				)

			toast.success(response.message)
			this.categories = [...this.categories, response.body]
			this.createLoading = false
		},

		async update(category) {
			let updateError = null

			this.updateLoading = true
			const response = await api("PUT", `/categories/${category.id}`, {
				name: category.name,
				description: category.description,
				brandId: category.brandId,
			}).catch((err) => updateError = err)

			if (updateError || !response.body)
				return toast.error(
					updateError
					? updateError
					: "Eroare interna"
				)

			this.updateLoading = false
			toast.success(response.message)
			const index = this.categories.indexOf(this.categories.find(item => item.id === category.id))
			this.categories[index] = response.body
		},

		async delete(categoryId) {
			let deleteError = null

			this.deleteLoading = true
			const response = await api("DELETE", `/categories/${categoryId}`)
				.catch((err) => deleteError = err)

			if (deleteError) return toast.error(deleteError)

			this.deleteLoading = false
			toast.success(response.message)
			this.categories = this.categories.filter(item => item.id !== categoryId)
		},
	}
})
