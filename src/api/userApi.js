import axiosClient from "./AxiosConfig/axiosClient";

const userApi = {
    userLogin: (params) => {
        const url = '/login';
        return axiosClient.post(url, {params});
    },
    // userGetAll: () => {
    //     const url = '/users';
    //     return axiosClient.get(url);
    // },
    // userRegister: (params) => {
    //     const url = '/user/register';
    //     return axiosClient.get(url, { params });
    // },
    // getUserId: (id) => {
    //     const url = `/user/${id}`;
    //     return axiosClient.get(url);
    // },
}

export default userApi;