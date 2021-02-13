import axios from "axios";
import baseUrl from '../config/baseUrl';
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(baseUrl);
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;