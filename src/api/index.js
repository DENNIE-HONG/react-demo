import Cookies from 'universal-cookie';
import userImg from 'assets/img/user.png';
import request from '../plugins/axios';
const cookies = new Cookies();
export function getUserList () {
  return request.get('/api/notes/9739254/included_collections?page=1');
}
export function postLogin (params) {
  return new Promise((reslove, reject) => {
    if (params.name !== '' && params.password !== '') {
      cookies.set('name', params.name, {
        path: '/'
      });
      reslove({
        code: 200,
        msg: ''
      });
    } else {
      reject('请输入参数');
    }
  });
}
// feed流数据
export function getFeedList (afterId) {
  return request({
    method: 'get',
    url: '/zhihu/api/v3/feed/topstory',
    params: {
      action_feed: true,
      limit: 7,
      action: 'down',
      desktop: true,
      after_id: afterId,
      session_token: '7b3aee59f8005e7cdd97912d7cba5246'
    }
  });
}
// 搜索数据
export function getSearchSuggest (keyword) {
  return request({
    method: 'get',
    url: '/zhihu/api/v4/search/suggest',
    params: {
      q: keyword
    }
  });
}
/**
 * @param {String} 图片的base64编码，不传参数则返回已存数据
 */
export function uploadImg (imgUrl) {
  const name = cookies.get('name');
  const oldImgUrl = localStorage.getItem(name) || null;
  if (imgUrl) {
    !oldImgUrl && localStorage.setItem(name, imgUrl);
    oldImgUrl && (oldImgUrl !== imgUrl) && localStorage.setItem(name, imgUrl);
    return Promise.resolve({
      code: 200,
      msg: ''
    });
  }
  return Promise.resolve({
    code: 200,
    data: oldImgUrl,
    msg: 'success'
  });
}
/**
 * 获取用户数据
*/
export function getUserInfo () {
  return new Promise((resolve, reject) => {
    try {
      const name = cookies.get('name') === 'undefined' ? null : cookies.get('name');
      const avatar = localStorage.getItem(name) || userImg;
      resolve({
        code: 200,
        data: {
          name,
          avatar
        },
        msg: ''
      });
    } catch (err) {
      reject({
        code: 1,
        msg: err
      });
    }
  });
}
/**
 * 登出
*/
export function logout () {
  return new Promise((resolve, reject) => {
    try {
      cookies.remove('name', {
        path: '/'
      });
      resolve({
        code: 200,
        msg: ''
      });
    } catch (err) {
      reject({
        code: 1,
        msg: err
      });
    }
  });
}
