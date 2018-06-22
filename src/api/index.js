import request from './request';
import apis from './api';

export function getUserList () {
  return request.get('/api/notes/9739254/included_collections?page=1');
}
