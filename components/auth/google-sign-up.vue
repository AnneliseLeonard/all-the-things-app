<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
</script>

<template>
	<button :disabled="authStore.loading" class="btn bg-white text-black border-none" @click="authStore.signInWithGoogle">
		<span v-if="authStore.loading" class="loading loading-spinner loading-md" />
		<Icon v-else aria-label="Google logo" name="logos:google-icon" /> Sign Up With Google
	</button>
</template>
