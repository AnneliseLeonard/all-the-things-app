<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set(value) {
		colorMode.preference = value ? 'dark' : 'light';
	},
});
</script>

<template>
	<label class="swap swap-rotate mx-2">
		<input v-model="isDark" type="checkbox">
		<Icon class="swap-on" name="lucide:sun" aria-label="sun" size="24" />
		<Icon class="swap-off" name="lucide:moon" aria-label="moon" size="24" />
	</label>
</template>
