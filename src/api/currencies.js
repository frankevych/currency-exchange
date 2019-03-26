import axiosInstance from './axios-base'

//current currency data
export const getCurrencies = () => {
    return axiosInstance.get();
}
//currency previous data.
export const getCurrenciesYesterday = () => {
    let currentTime = new Date();
    const fullYear = currentTime.getFullYear();
    const month = currentTime.getMonth();
    let day = +(currentTime.getDate()) - 1;
    
    const requestUrlPastData = '?date=' + fullYear + '-' + month + '-' + day;

    return axiosInstance.get(requestUrlPastData);
}