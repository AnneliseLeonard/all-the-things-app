<script setup lang="ts">
import SignInModal from '../sign-in-modal.vue';
</script>

<template>
	<div class="navbar bg-primary text-primary-content">
		<div class="navbar-start">
			<button class="btn btn-ghost text-xl">
				AllTheThings
			</button>
		</div>
		<div class="navbar-end">
			<AppThemeToggle />
			<SignInModal />
		</div>
	</div>
</template>
