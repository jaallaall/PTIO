import axios, { AxiosInstance } from 'axios'
// import { store } from 'redux/store';

const getStorLocal = (item: string) => {
    if (typeof localStorage !== 'undefined') {
        // return JSON.parse(localStorage.getItem(item) as string);
        return JSON.parse(
            JSON.parse(localStorage.getItem(item) as string).token
        )
    }
    return null
}

export const instance = (contentType?: string): AxiosInstance => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_API_URL,
        headers: {
            'Content-Type': contentType ?? 'application/json',
            user_token:
                '9befcb947b8091c5e915bca371cddbda76f0c1f932d09ca84bf79c58357e95cf',
        },
    })

    // axiosInstance.interceptors.request.use((config): AxiosRequestConfig => {
    //     if (config.headers) {
    //         config.headers.Authorization = `Bearer ${getStorLocal(
    //             'persist:root'
    //         )}`
    //     }

    //     return config
    // })
    return axiosInstance
}
