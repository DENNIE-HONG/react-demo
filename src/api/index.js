import Cookies from 'universal-cookie';
import request from '../plugins/axios';
const cookies = new Cookies();
export function getUserList () {
  return request.get('/api/notes/9739254/included_collections?page=1');
}
export function postLogin (params) {
  return new Promise((reslove, reject) => {
    if (params.name != '' && params.password != '') {
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
export function getFeedList (afterId) {
  return request({
    method: 'get',
    url: '/zhihu/api/v3/feed/topstory',
    params: {
      action_feed: true,
      limit: 7,
      action: 'down',
      desktop: true,
      after_id: afterId
    }
  });
}
