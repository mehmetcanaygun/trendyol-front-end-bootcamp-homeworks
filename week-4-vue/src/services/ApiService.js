import axios from "axios";

class ApiService {
  constructor() {}

  getStarships = async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/starships/");

      const { count, next, previous, results } = res.data;

      return [results, { count, next, previous }];
    } catch (err) {
      return [];
    }
  };

  getPage = async (url) => {
    try {
      const res = await axios.get(url);

      const { count, next, previous, results } = res.data;

      return [results, { count, next, previous }];
    } catch (err) {
      return [];
    }
  };

  searchStarship = async (term) => {
    try {
      const res = await axios.get(
        `https://swapi.dev/api/starships/?search=${term}`
      );

      const { count, next, previous, results } = res.data;

      return [results, { count, next, previous }];
    } catch (err) {
      return [];
    }
  };

  getStarship = async (id) => {
    try {
      const res = await axios.get(`https://swapi.dev/api/starships/${id}/`);

      return res.data;
    } catch (err) {
      return [];
    }
  };
}

export default ApiService;
