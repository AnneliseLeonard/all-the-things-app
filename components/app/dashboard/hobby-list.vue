<script lang="ts" setup>
import { useHobbyList } from '~/stores/hobbies';

const { hobbies, removeHobby } = useHobbyList();
</script>

<template>
	<div>
		<ul class="list bg-base-200 rounded-box shadow-md place-self-center p-4 w-lg md:w-2xl lg:w-4xl">
			<AppDashboardAddHobby />
			<li v-for="(hobby, index) in hobbies" :key="index" class="list-row bg-base-300 m-2">
				<div>{{ hobby }}</div>
				<button class="btn btn-lg btn-circle btn-ghost absolute right-2 bottom-4" @click="removeHobby(index)">
					✕
				</button>
			</li>
		</ul>
	</div>
</template>
