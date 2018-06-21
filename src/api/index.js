import axios from 'axios';
import request from './request';
import apis from './api';

export function getUserList () {
  return axios.get('https://www.jianshu.com/notes/9739254/included_collections?page=1');
}
