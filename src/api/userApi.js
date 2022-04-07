import axiosClient from "./AxiosConfig/axiosClient";

const userApi = {
    userLogin: (payload) => {
        const url = '/login';
        return axiosClient.post(url, payload);
    },
    userRegister: (payload) => {
        const url = '/user';
        return axiosClient.post(url, payload);
    },
    // userGetAll: () => {
    //     const url = '/users';
    //     return axiosClient.get(url);
    // },
    // getUserId: (id) => {
    //     const url = `/user/${id}`;
    //     return axiosClient.get(url);
    // },
}

export default userApi;