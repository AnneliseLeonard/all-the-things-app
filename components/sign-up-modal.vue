<template>
	<button class="btn" onclick="my_modal_2.showModal()">
		Sign Up
	</button>
	<dialog id="my_modal_2" class="modal">
		<div class="modal-box bg-base-200 min-w-fit">
			<h4 class="text-lg font-bold text-center pb-4">
				Sign Up
			</h4>

			<div class="flex">
				<div class="w-full m-2 place-self-center">
					<AuthGoogleSignUp />
				</div>
				<div class="w-full ml-2 place-self-center">
					<AuthUsernameSignUp />
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
