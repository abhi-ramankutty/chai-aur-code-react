import { Client, Account, ID } from 'appwrite';

import config from '../config/config';

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.account = new Account(this.client);
	}

	async createAccount({email, password, name}) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);

			if (userAccount) {
				await this.login({email, password});
			} else {
				throw new Error('Account creation failed');
			}
		} catch (error) {
			console.error('Appwrite serive :: createAccount :: error', error);
			throw error;
		}
	}

	async login({email, password}) {
		try {
			const userAccount = await this.account.createEmailPasswordSession(
				email,
				password
			);
			return userAccount;
		} catch (error) {
			console.error('Appwrite serive :: login :: error', error);
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.error('Appwrite serive :: getCurrentUser :: error', error);
			throw error;
		}
	}

	async logout() {
		try {
            return await this.account.deleteSessions();
		} catch (error) {
			console.error('Appwrite serive :: logout :: error', error);
			throw error;
		}
	}
}

const authService = new AuthService();
export default authService;
