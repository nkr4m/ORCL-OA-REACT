import axios from 'axios';
const API_URL_CREATOR = `http://localhost:8081`

export const fetchSurveys = () => {
    return axios.get(`${API_URL_CREATOR}/view-all-survey`);
}