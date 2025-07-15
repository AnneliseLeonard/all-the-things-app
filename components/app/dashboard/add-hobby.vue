<script lang="ts" setup>
import { useHobbyList } from '~/stores/hobbies';

const newHobby = ref('');
const hobbyList = useHobbyList();

function handleAdd() {
	hobbyList.addHobby(newHobby.value);
	newHobby.value = '';
}
</script>

<template>
	<button class="btn btn-primary w-16 text-xl" onclick="my_modal_3.showModal()">
		+
	</button>
	<dialog id="my_modal_3" class="modal">
		<div class="modal-box bg-secondary grid grid-cols-6 p-4 pt-2">
			<div class="dropdown place-self-center mt-4">
				<div tabindex="0" role="button" class="btn justify-self-center p-6 mr-2">
					Icon
				</div>
				<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 shadow-sm">
					<li><a><Icon name="lucide:book-open" /></a></li>
					<li><a>Item 2</a></li>
				</ul>
			</div>

			<input v-model="newHobby" type="text" placeholder="Enter new hobby" class="input input-bordered w-full p-6 col-span-5 place-self-center text-lg mt-4 ml-2" @keyup.enter="handleAdd">

			<div class="modal-action col-start-6">
				<form method="dialog">
					<Button class="relative btn btn-primary text-md -top-2 -mb-1" @click="handleAdd">
						Add
					</Button>
				</form>
			</div>
		</div>

		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</template>
