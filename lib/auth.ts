import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import db from './db/index';
import env from './env';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite',
	}),
	advanced: {
		generateId: false,
	},
	socialProviders: {
		google: {
			prompt: 'select_account',
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			errorURL: '/error',
		},
	},
	emailAndPassword: {
		enabled: true,
		disableSignUp: false,
		requireEmailVerification: false,
		minPasswordLength: 3,
		errorURL: '/error',
	},
});
