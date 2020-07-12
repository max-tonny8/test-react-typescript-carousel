import { apiConstants } from '../constant/api.constants';
import axios from 'axios';

export const loadDataService = {
  loadFeatured: loadFeatured,
  loadPeopleAroundYou: loadPeopleAroundYou,
};

function loadFeatured() {
  const url = `${apiConstants.baseURL}/featured`;
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      console.log('Axios featured data=', data);
      return data;
    });
}

function loadPeopleAroundYou() {
  const url = `${apiConstants.baseURL}/carousel`;
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      console.log('Axios people around you data=', data);
      return data;
    });
}
