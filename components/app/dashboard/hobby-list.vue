<script lang="ts" setup>
import { useHobbyList } from '~/stores/hobbies';

const { hobbies, removeHobby } = useHobbyList();
</script>

<template>
	<div>
		<ul class="list bg-base-200 rounded-box shadow-md w-3/4 p-4">
			<AppDashboardAddHobby />
			<li v-for="(hobby, index) in hobbies" :key="index" class="list-row bg-base-300 m-2">
				<button class="btn" @click="removeHobby(index)">
					Delete
				</button>
				<div>{{ hobby }}</div>
			</li>
		</ul>
	</div>
</template>
