//import api from "./helpers/api";
import api from "axios";



export const fetchData = async query => {
  const url = `http://www.mocky.io/v2/5e382611310000e489d37ff9`;


  return await api.get(url);
};

fetchData('react');
