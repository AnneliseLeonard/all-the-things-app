<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');

async function redirect() {
	await navigateTo('/dashboard');
}
async function handleSubmit() {
	await authStore.signUpWithEmail(name.value, email.value, password.value);
}
</script>

<template>
	<form class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-3 " @submit.prevent="handleSubmit">
		<legend class="fieldset-legend place-self-center text-base">
			Sign Up with Email
		</legend>
		<div class="h-full grid gap-2">
			<input v-model="name" type="text" class="input" placeholder="Name">
			<input v-model="email" type="email" class="input" placeholder="Email">
			<input v-model="password" type="password" class="input" placeholder="Password">
		</div>
		<div class="modal-action">
			<form method="dialog">
				<button type="submit" class="btn btn-primary -mt-4" :disabled="authStore.loading" @click="redirect">
					<span v-if="authStore.loading" class="loading loading-spinner loading-md" />
					Sign Up
				</button>
			</form>
		</div>
	</form>
</template>
