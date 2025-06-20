import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';
import config from '../config/config';

export class AppwriteService {
	client = new Client();
	databases;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				ID.unique(),
				{ title, slug, content, featuredImage, status, userId }
			);
		} catch (error) {
			console.error('AppwriteService :: createPost :: Error :: ', error);
			throw error;
		}
	}

	async updatePost(postId, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				postId,
				{ title, content, featuredImage, status }
			);
		} catch (error) {
			console.error('AppwriteService :: updatePost :: Error :: ', error);
			throw error;
		}
	}

	async deletePost(postId) {
		try {
			return await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				postId
			);
		} catch (error) {
			console.error('AppwriteService :: deletePost :: Error :: ', error);
			throw error;
		}
	}

	async getPost(postId) {
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				postId
			);
		} catch (error) {
			console.error('AppwriteService :: getPost :: Error :: ', error);
			throw error;
		}
	}

	async getAllPosts(queries = [Query.equal('status', 'actve')]) {
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.error('AppwriteService :: getAllPosts :: Error :: ', error);
			throw error;
		}
	}
}

const appwriteService = new AppwriteService();
export default appwriteService;
