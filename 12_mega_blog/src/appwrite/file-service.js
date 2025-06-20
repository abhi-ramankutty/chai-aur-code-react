import { Client, Account, ID, Databases, Storage } from 'appwrite';
import config from '../config/config';

export class FileService {
	client = new Client();
	bucket;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.bucket = new Storage(this.client);
	}

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			console.error('FileService :: uploadFile :: Error :: ', error);
			throw error;
		}
	}

	async deleteFile(fileId) {
		try {
			return await this.bucket.deleteFile(
				config.appwriteBucketId,
				fileId
			);
		} catch (error) {
			console.error('FileService :: deleteFile :: Error :: ', error);
			throw error;
		}
	}

	async getFilePreview(fileId) {
		try {
			return await this.bucket.getFilePreview(
				config.appwriteBucketId,
				fileId
			);
		} catch (error) {
			console.error('FileService :: getFilePreview :: Error :: ', error);
			throw error;
		}
	}
}

const fileService = new FileService();
export default fileService;
