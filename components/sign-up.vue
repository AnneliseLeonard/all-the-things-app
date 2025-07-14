<template>
	<button class="btn text-lg" onclick="sign_up_modal.showModal()">
		Sign Up
	</button>
	<dialog id="sign_up_modal" class="modal">
		<div class="modal-box bg-base-200 min-w-fit">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
					✕
				</button>
			</form>
			<h3 class="text-center text-3xl pb-4 -mt-2">
				Sign Up
			</h3>

			<div class="flex">
				<div class="w-full place-self-center place-items-center flex flex-row gap-4">
					<AuthGoogle />
					<AuthEmail />
				</div>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</template>
