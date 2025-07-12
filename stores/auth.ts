import { createAuthClient } from 'better-auth/client';
import { usernameClient } from 'better-auth/client/plugins';
import { defineStore } from 'pinia';

const authClient = createAuthClient({
	plugins: [
		usernameClient(),
	],
});

export const useAuthStore = defineStore('AuthStore', () => {
	const loading = ref(false);

	async function signInWithGoogle() {
		loading.value = true;
		try {
			await authClient.signIn.social({
				provider: 'google',
				callbackURL: '/dashboard',
			});
		}
		finally {
			loading.value = false;
		}
	}

	async function signInWithUsername() {
		loading.value = true;
		try {
			await authClient.signIn.username({
				username: '',
				password: '',
			});
		}
		finally {
			loading.value = false;
		}
	}

	async function signUpWithUsername() {
		loading.value = true;
		try {
			await authClient.signUp.email({
				name: '',
				email: '',
				username: '',
				password: '',
				callbackURL: '/dashboard',
			});
		}
		finally {
			loading.value = false;
		}
	}

	return {
		loading,
		signInWithGoogle,
		signInWithUsername,
		signUpWithUsername,
	};
});
