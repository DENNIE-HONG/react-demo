import request from './request';

export function getUserList () {
  return request.get('/api/notes/9739254/included_collections?page=1');
}
