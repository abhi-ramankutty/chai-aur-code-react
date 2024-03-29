import config from '../config/config';
import {Client, ID, Storage, Databases, Query} from 'appwrite';

class AppwriteService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteBucketId,
                slug,
                {title, content, featuredImg, status, userId}
            );
        } catch (error) {
            console.log('Appwrite Service :: createPost :: error', error);
            throw error;
        }
    }

    async updatePost({title, slug, content, featuredImg, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteBucketId,
                slug,
                {title, content, featuredImg, status}
            );
        } catch (error) {
            console.log('Appwrite Service :: updatePost :: error', error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteBucketId,
                slug
            );
            return true;
        } catch (error) {
            console.log('Appwrite Service :: deletePost :: error', error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteBucketId,
                slug
            );
        } catch (error) {
            console.log('Appwrite Service :: getPost :: error', error);
            throw error;
        }
    }

    async getAllPosts(queries = [Query.equal('status', ['active'])]) {
        try {
            this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteBucketId,
                queries
            );
        } catch (error) {
            console.log('Appwrite Service :: getAllPosts :: error', error);
            throw error;
        }
    }

    async uploadFile(fileBlob) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                fileBlob
            );
        } catch (error) {
            console.log('Appwrite Service :: uploadFile :: error', error);
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log('Appwrite Service :: getFilePreview :: error', error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log('Appwrite Service :: uploadFile :: error', error);
            throw error;
        }
    }
}
const appwriteService = new AppwriteService();

export default appwriteService;
