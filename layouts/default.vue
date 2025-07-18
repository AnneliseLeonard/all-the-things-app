<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
	<div class="flex min-h-screen flex-col">
		<div v-if="authStore.user">
			<AppNavBar />
		</div>
		<div v-else>
			<AppDashboardNavBar />
		</div>
		<main>
			<slot />
		</main>
	</div>
</template>
