import type {PostServiceInterface, UserServiceInterface} from "../services/ports";
import {PostService} from "../services/Post";
import {UserService} from "../services/User";

export function usePost() {
    const postService: PostServiceInterface = PostService;
    const userService: UserServiceInterface = UserService;

    async function bulkCreate(titles: string[] = [], userIds: number[] = [], bodies: string[] = []): Promise<boolean> {
        const fakeArrayForFindMaxParameterArrays = Array.from({length: Math.max(titles.length, userIds.length, bodies.length)});
        const response = await Promise.allSettled(fakeArrayForFindMaxParameterArrays.map(async (value, index) => {
            await postService.createPost({
                userId: userIds[index],
                title: titles[index],
                body: bodies[index]
            })
        }));
        const isAllRequestFulfilled = response.every(x => x.status === 'fulfilled');
        return isAllRequestFulfilled
    }

    async function getUsers(): Promise<{ title: string, value: number }[]> {
        const users = await userService.getUsers();

        return users.map((item) => {
            return {
                title: item.username,
                value: parseInt(item.id.toString())
            }
        })
    }

    return {bulkCreate, getUsers}
}