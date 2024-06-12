import type {UserServiceInterface} from "./ports";
import http from "../shared/helper/http";

export const UserService: UserServiceInterface = {
    async getUsers() {
        const response = await http().get("https://jsonplaceholder.typicode.com/users");
        if (response.status === 200) {
            return response.data
        }
        return []
    }
}