import axios from 'axios';

const baseurl = process.env.baseUrl;
export const axioshttp = axios.create({
    base_Url: baseurl
})