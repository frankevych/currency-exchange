import axiosInstance from './axios-base'

export const getCurrencies = () => {
    return axiosInstance.get();
}