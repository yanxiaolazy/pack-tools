import React from 'react';
import ReactDOM from 'react-dom';

import './style';

ReactDOM.render(
  <div className='app'>
    <h1>pack-tools</h1>
    <p>一个使用webpack搭建的简易的脚手架</p>
    <div>
      <p><strong>说明</strong></p>
      <p>安装依赖 <code>yarn install</code></p>
      <p>开发模式 <code>yarn run start</code></p>
      <p>生产模式 <code>yarn run build</code></p>
    </div>
    <div>
      <span><a href='https://github.com/yanxiaolazy/pack-tools'>仓库地址</a></span>
      <span>Github <a href='https://github.com/yanxiaolazy'>yanxiaolazy</a></span>
    </div>
  </div>,
  document.getElementById('root')
);
