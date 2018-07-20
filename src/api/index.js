import Cookies from 'universal-cookie';
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
      session_token: '0cab00c1e1231206c9ab62e69a149c90'
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
  const name = 'img';
  const oldImgUrl = localStorage.getItem('img') || null;
  if (imgUrl) {
    !oldImgUrl && (oldImgUrl !== imgUrl) && localStorage.setItem(name, imgUrl);
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
