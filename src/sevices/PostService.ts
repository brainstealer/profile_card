import axios from "axios";

export default class PostService {
    static async getPostById(id: any) {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        return response;
    }
}