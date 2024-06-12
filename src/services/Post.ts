import type {PostServiceInterface} from "./ports";
import http from "../shared/helper/http";
import type {Post} from "../domain/post";

export const PostService: PostServiceInterface = {
    async getPosts() {
        const response = await http().get('/posts');
        if (response.status === 200) {
            return response.data;
        }
        return [];
    },
    async createPost(post: Omit<Post, 'id'>) {
        return await http().post('/posts', post);
    }
}