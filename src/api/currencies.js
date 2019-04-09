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
    //yesterday
    let yesterday = +(currentTime.getDate()) - 1;
    
    const requestUrlPastData = '?date=' + fullYear + '-' + month + '-' + yesterday;

    return axiosInstance.get(requestUrlPastData);
}