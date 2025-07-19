import { createAuthClient } from 'better-auth/vue';
import { defineStore } from 'pinia';

const authClient = createAuthClient();

export const useAuthStore = defineStore('AuthStore', () => {
	const session = authClient.useSession();
	const user = computed(() => session.value.data?.user);
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

	async function signUpWithEmail(name: string, email: string, password: string) {
		loading.value = true;
		try {
			await authClient.signUp.email({
				name,
				email,
				password,
				callbackURL: '/dashboard',
			});
		}
		finally {
			loading.value = false;
		}
	}

	async function signInWithEmail(email: string, password: string) {
		loading.value = true;
		try {
			await authClient.signIn.email({
				email,
				password,
				callbackURL: '/dashboard',
			});
		}
		finally {
			loading.value = false;
		}
	}

	async function signOut() {
		await authClient.signOut();
		navigateTo('/');
	}

	return {
		loading,
		signInWithGoogle,
		signUpWithEmail,
		signInWithEmail,
		signOut,
		user,
	};
});
