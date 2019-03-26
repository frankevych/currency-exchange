import axiosInstance from './axios-base'

export const getCurrencies = () => {
    return axiosInstance.get();
}

export const getCurrenciesYesterday = () => {
    return axiosInstance.get('?date=2019-03-22');
}