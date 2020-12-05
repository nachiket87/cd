import axios from "axios";

export const fetchData = (url, setData) => {
  const getData = async () => {
    const request = await axios.get(url);
    setData(request.data);
    return request;
  };
  getData();
};
