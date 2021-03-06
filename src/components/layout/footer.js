/**
 * 底部通用模块
 * @author luyanhong 2018-08-01
*/
import React from 'react';
import './layout.scss';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <section>
          <h1>相关资源</h1>
          <a href="https://github.com/DENNIE-HONG/react-demo">github<i className="iconfont icon-github"></i></a>
        </section>
      </div>
      <div className="footer-bottom">
        <small>@{year} Made with <i className="iconfont icon-yonghu-xianxing"></i>luyanhong</small>
      </div>
    </footer>
  );
};
export default Footer;
