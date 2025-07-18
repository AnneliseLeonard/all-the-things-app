<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || 'An unknown error occured.';
</script>

<template>
	<div class="card bg-base-200 container mt-4 min-h-72 text-center justify-center items-center mx-auto flex flex-col gap-4">
		<div role="alert" class="alert alert-error min-w-1/2 text-center">
			<span>Oh no! {{ error }}</span>
		</div>
		<NuxtLink to="/" class="btn btn-primary">
			<Icon name="tabler:arrow-left" size="26" />
			Home
		</NuxtLink>
	</div>
</template>
