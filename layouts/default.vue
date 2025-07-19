<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
	<div class="flex min-h-screen flex-col">
		<div v-if="authStore.user">
			<AppDashboardNavBar />
		</div>
		<div v-else>
			<AppNavBar />
		</div>
		<main>
			<slot />
		</main>
	</div>
</template>
