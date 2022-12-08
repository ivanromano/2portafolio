import { api } from "src/boot/axios";
import { useUserStore } from "./example-store";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUrlStore = defineStore("url", () => {
	const useUser = useUserStore()

	const links = ref([])

	const createLink = async (longLink) => {
		try {
			const res = await api({
				method: "post",
				url: "/links",
				headers: {
					Authorization: "Bearer " + useUser.token,
				},
				data: {
					longLink: longLink,
				},
			});
			// console.log(res.data);
			links.value.push(res.data.newLink)
			console.log(links);
		} catch (error) {
			throw error.response?.data || error
		}
	};

	const getLinks = async() => {
		try {
			console.log('llamando todos los links')
			const res = await api({
				url: '/links',
				method: 'get',
				headers: {
					Authorization: "Bearer " + useUser.token,
				}
			})
			links.value = [...res.data.link]
		} catch (error) {
			console.log('celebi' + error.res.data);
		}
	}

	getLinks()

	const removeLINK = async (_id) => {
		try {
			await api({
				url: `links/${_id}`,
				method: 'DELETE',
				headers: {
					Authorization: "Bearer " + useUser.token,
				},
			})
			links.value = links.value.filter(item => item._id !== _id)
		} catch (error) {
			console.log(error.response?.data || error);
		}
	}
	return {createLink, links, getLinks, removeLINK}
})
