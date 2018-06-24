import request from '../plugins/axios';
export function getUserList () {
  return request.get('/api/notes/9739254/included_collections?page=1');
}
export function postLogin (params) {
  return new Promise((reslove, reject) => {
    if (params.name != '' && params.password != '') {
      reslove({
        code: 200,
        msg: ''
      });
    } else {
      reject('请输入参数');
    }
  });
}
