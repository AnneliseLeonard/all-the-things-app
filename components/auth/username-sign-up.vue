<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
</script>

<template>
	<div>
		<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
			<input type="text" class="input" placeholder="Name">
			<input type="text" class="input" placeholder="Username">
			<input type="email" class="input" placeholder="Email">
			<input type="password" class="input" placeholder="Password">

			<button :disabled="authStore.loading" class="btn" @click="authStore.signUpWithUsername">
				Sign Up
			</button>
		</fieldset>
	</div>
</template>

<style>

</style>
