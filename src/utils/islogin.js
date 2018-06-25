import Cookies from 'universal-cookie';
const cookies = new Cookies();
function isLogin () {
  return cookies.get('name');
}
export default isLogin;
