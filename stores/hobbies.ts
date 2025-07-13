import { defineStore } from 'pinia';

export const useHobbyList = defineStore('HobbyList', () => {
	const hobbies = ref<string[]>([]);

	const addHobby = (hobby: string) => {
		if (hobby.trim() !== '') {
			hobbies.value.push(hobby.trim());
		}
	};

	const removeHobby = (index: number) => {
		hobbies.value.splice(index, 1);
	};

	return {
		hobbies,
		addHobby,
		removeHobby,
	};
});
