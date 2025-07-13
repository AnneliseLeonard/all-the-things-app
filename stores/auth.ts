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
	return {
		loading,
		signInWithGoogle,
	};
});
