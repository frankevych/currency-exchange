import axiosInstance from './axios-base'

export const getCurrencies = () => {
    console.log('in getCurrencies ' + axiosInstance.get());
    return axiosInstance.get();
}

export const currenciesList = [
    {"buying_rate": "4.648922", "selling_rate": "4.676900", "median_rate": "4.662911", "currency_code": "AUD", "unit_value": 1}, 
    {"buying_rate": "4.927062", "selling_rate": "4.956714", "median_rate": "4.941888", "currency_code": "CAD", "unit_value": 1}, 
    {"buying_rate": "0.287134", "selling_rate": "0.288862", "median_rate": "0.287998", "currency_code": "CZK", "unit_value": 1}, 
    {"buying_rate": "0.988965", "selling_rate": "0.994917", "median_rate": "0.991941", "currency_code": "DKK", "unit_value": 1}, 
    {"buying_rate": "2.321243", "selling_rate": "2.335213", "median_rate": "2.328228", "currency_code": "HUF", "unit_value": 100}, 
    {"buying_rate": "5.925295", "selling_rate": "5.960953", "median_rate": "5.943124", "currency_code": "JPY", "unit_value": 100}, 
    {"buying_rate": "0.755239", "selling_rate": "0.759785", "median_rate": "0.757512", "currency_code": "NOK", "unit_value": 1}, 
    {"buying_rate": "0.703819", "selling_rate": "0.708055", "median_rate": "0.705937", "currency_code": "SEK", "unit_value": 1}, 
    {"buying_rate": "6.500546", "selling_rate": "6.539666", "median_rate": "6.520106", "currency_code": "CHF", "unit_value": 1}, 
    {"buying_rate": "8.387825", "selling_rate": "8.438303", "median_rate": "8.413064", "currency_code": "GBP", "unit_value": 1}, 
    {"buying_rate": "6.545524", "selling_rate": "6.584916", "median_rate": "6.565220", "currency_code": "USD", "unit_value": 1}, 
    {"buying_rate": "3.772705", "selling_rate": "3.795409", "median_rate": "3.784057", "currency_code": "BAM", "unit_value": 1}, 
    {"buying_rate": "7.378769", "selling_rate": "7.423175", "median_rate": "7.400972", "currency_code": "EUR", "unit_value": 1}, 
    {"buying_rate": "1.704970", "selling_rate": "1.715230", "median_rate": "1.710100", "currency_code": "PLN", "unit_value": 1}
]