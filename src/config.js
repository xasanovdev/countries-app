const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flag,region,population';
export const searchByCountry = (name) => BASE_URL + 'name/' + name;
export const filteredByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');


