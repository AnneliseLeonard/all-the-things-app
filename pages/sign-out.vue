<script lang="ts" setup>
const authStore = useAuthStore();

onMounted(() => {
	authStore.signOut();
});
</script>

<template>
	<div class="card bg-base-200 container mt-4 min-h-72 text-center justify-center items-center mx-auto flex flex-col gap-4">
		<span class="loading loading-spinner loading-md" />
	</div>
</template>
