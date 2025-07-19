<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
	<div class="hero rounded-xl bg-base-200 container mx-auto mt-4 min-h-90">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-6xl font-bold">
					Welcome
				</h1>
				<p class="py-6">
					Track hobbies, work sessions, and projects, set goals, and create a portfolio with All The Things.
				</p>
				<SignUp v-if="!authStore.user" />
				<NuxtLink v-else to="/dashboard" class="btn btn-primary">
					Start Logging
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
