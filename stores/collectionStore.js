import {defineStore} from "pinia";
import {useToast} from "vue-toastification";
import api from "../api/api.js";

const toast = useToast()

export const useCollectionStore = defineStore('collection', {
	state: () => ({
		collections: [],

		getLoading: false,
		createLoading: false,
		updateLoading: false,
		deleteLoading: false,
	}),
	actions: {
		async getAll() {
			let getError = null

			this.getLoading = true
			const response = await api("GET", "/collections")
				.catch((err) => getError = err)

			if (getError) return toast.error(getError)

			this.collections = response.body
			this.getLoading = false
		},

		async create(name, description, brandId, categoryId) {
			let createError = null

			this.createLoading = true
			const response = await api("POST", "/collections", {
				name,
				description,
				brandId,
				categoryId
			}).catch((err) => createError = err)

			if (createError || !response.body)
				return toast.error(
					createError
						? createError
						: "Eroare interna"
				)

			toast.success(response.message)
			this.collections = [...this.collections, response.body]
			this.createLoading = false
		},

		async update(collection) {
			let updateError = null

			this.updateLoading = true
			const response = await api("PUT", `/collections/${collection.id}`, {
				name: collection.name,
				description: collection.description,
				brandId: collection.brandId,
				categoryId: collection.categoryId
			}).catch((err) => updateError = err)

			if (updateError || !response.body)
				return toast.error(
					updateError
						? updateError
						: "Eroare interna"
				)

			this.updateLoading = false
			toast.success(response.message)
			const index = this.collections.indexOf(this.collections.find(item => item.id === collection.id))
			this.collections[index] = response.body
		},

		async delete(collectionId) {
			let deleteError = null

			this.deleteLoading = true
			const response = await api("DELETE", `/collections/${collectionId}`)
				.catch((err) => deleteError = err)

			if (deleteError) return toast.error(deleteError)

			this.deleteLoading = false
			toast.success(response.message)
			this.collections = this.collections.filter(item => item.id !== collectionId)
		},
	}
})
