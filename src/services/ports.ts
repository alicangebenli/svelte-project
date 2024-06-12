import type {Post} from "../domain/post";
import type {User} from "../domain/user";

export interface PostServiceInterface {
    getPosts(): Promise<Array<Post>>

    createPost(post: Omit<Post, "id">): Promise<{ id: number }>
}

export interface UserServiceInterface {
    getUsers(): Promise<Array<User>>
}