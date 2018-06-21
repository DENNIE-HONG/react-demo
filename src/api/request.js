import axios from 'axios';
axios.defaults.timeout = 100000;
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';
// axios.defaults.headers['Accept-Encoding'] = 'gzip';
axios.interceptors.response.use((response) => {
  console.log(response.data);
  if (response.data.code == 200) {
    return response.data.data || response.data;
  }
  throw Error(response.data.msg || '服务异常');
});
export default axios;
