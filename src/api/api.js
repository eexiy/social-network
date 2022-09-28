import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "12d68bc4-78de-4bd1-b337-a8b228af48d6" }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}
export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}


