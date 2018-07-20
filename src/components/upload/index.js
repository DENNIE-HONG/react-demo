import React, { Component } from 'react';
import Loading from 'coms/loading';
import showMessage from 'coms/message';
import { uploadImg } from 'api';
import './upload.scss';
class Upload extends Component {
  constructor (props) {
    super(props);
    this.state = {
      maxSize: props.maxSize || 5,
      type: props.acceptType || 'png,jpg,jpeg,bmp',
      isLoading: false,
      imgUrl: props.file || ''
    };
    this.handlePic = this.handlePic.bind(this);
    console.log(1);
  }
  async handlePic (event) {
    try {
      this.setState({
        isLoading: true
      });
      const file = event.target.files[0];
      const errorMsg = this.check(file);
      if (errorMsg) {
        this.uploadFail(errorMsg);
        return;
      }
      const base64Url = await this.changeToBase64(file);
      this.setState({
        isLoading: false,
        imgUrl: base64Url
      });
      uploadImg(base64Url);
    } catch (err) {
      this.uploadFail();
    }
  }
  uploadFail (errorMsg = '上传图片失败，请稍候再试') {
    showMessage({
      type: 'error',
      message: errorMsg
    });
    this.setState({
      isLoading: false
    });
  }
  /**
   * 校验图片
   */
  check (file) {
    const size = file.size / 1024 / 1024;
    const type = file.type.split('/')[1];
    const reg = new RegExp(type);
    let errorMsg;
    if (!reg.test(this.state.type)) {
      errorMsg = '图片类型不对哦';
    }
    if (size > this.state.maxSize) {
      errorMsg = `图片超过${this.state.maxSize}M了哦`;
    }
    return errorMsg;
  }
  /**
   * 将图片转为base64编码
   * @return {Promise} 成功返回url
  */
  changeToBase64 (imgFile) {
    const reader = new FileReader();
    let data;
    reader.readAsDataURL(imgFile);
    return new Promise((resolve, reject) => {
      reader.onload = function (e) {
        data = e.target.result;
        resolve(data);
      };
      reader.onerror = function () {
        reject(null);
      };
    });
  }
  render () {
    const { isLoading, imgUrl } = this.state;
    return (
      <div className="com-upload">
        {imgUrl && <img src={imgUrl} />}
        {!imgUrl && (
          <div className="com-upload-box">
            {!isLoading && (
              <div className="com-uploader">
                <p>+</p>
                <span>Upload</span>
              </div>
            )}
            {isLoading && <Loading />}
          </div>
        )}
        <input type="file" accept="image" className="com-upload-btn" onChange={this.handlePic} />
      </div>
    );
  }
}
export default Upload;