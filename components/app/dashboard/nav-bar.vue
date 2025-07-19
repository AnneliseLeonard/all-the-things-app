<script setup lang="ts">

</script>

<template>
	<div class="navbar bg-primary text-primary-content shadow-sm">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<Icon name="lucide:align-justify" size="24" />
				</div>
				<ul
					tabindex="0"
					class="menu dropdown-content bg-base-200 rounded-box z-1 w-52 mt-3 p-2 shadow-sm"
				>
					<li><a>Home</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
			<AppThemeToggle />
		</div>
		<div class="navbar-center">
			<NuxtLink id="home" to="/" class="btn btn-ghost btn-primary text-4xl font-bold pb-1 text-base-content">
				<h1 class="">
					AllTheThings
				</h1>
			</NuxtLink>
		</div>
		<div class="navbar-end">
			<button class="btn btn-ghost btn-circle">
				<Icon name="lucide:search" size="22" />
			</button>
			<button class="btn btn-ghost btn-circle">
				<Icon name="lucide:bell" size="22" />
				<div class="indicator">
					<span class="badge badge-xs badge-primary indicator-item" />
				</div>
			</button>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<Icon name="lucide:circle-user" size="22" />
				</div>
				<ul
					tabindex="0"
					class="menu dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow-sm text-base-content"
				>
					<li><a>Account</a></li>
					<li><a>Settings</a></li>
					<li><a>Sign Out</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
