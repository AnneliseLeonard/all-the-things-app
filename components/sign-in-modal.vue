<template>
	<button class="btn" onclick="my_modal_1.showModal()">
		Sign In
	</button>
	<dialog id="my_modal_1" class="modal">
		<div class="modal-box bg-base-200 min-w-fit">
			<h4 class="text-lg font-bold text-center pb-4">
				Sign In
			</h4>

			<div class="flex">
				<div class="w-full m-2 place-self-center">
					<AuthGoogle />
				</div>
				<div class="w-full ml-2 place-self-center">
					<AuthUsernameSignIn />
				</div>
			</div>

			<div class="modal-action">
				<form method="dialog">
					<button class="btn btn-sm relative -top-2">
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
