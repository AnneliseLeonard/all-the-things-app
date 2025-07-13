<template>
	<button class="btn text-lg" onclick="my_modal_2.showModal()">
		Sign Up
	</button>
	<dialog id="my_modal_2" class="modal">
		<div class="modal-box bg-base-200 min-w-fit">
			<h3 class="text-center text-3xl pb-4">
				Sign Up
			</h3>

			<div class="flex">
				<div class="w-full m-2 place-self-center">
					<AuthGoogleSignUp />
				</div>
			</div>

			<div class="modal-action">
				<form method="dialog">
					<button class="btn">
						Close
					</button>
				</form>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</template>
