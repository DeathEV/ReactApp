import axiosClient from "./AxiosConfig/axiosClient";

const userApi = {
    userLogin: (params) => {
        const url = '/user/login';
        return axiosClient.get(url, { params });
    },
    userRegister: (params) => {
        const url = '/user/register';
        return axiosClient.get(url, { params });
    },
    // getUserId: (id) => {
    //     const url = `/user/${id}`;
    //     return axiosClient.get(url);
    // },
}

export default userApi;