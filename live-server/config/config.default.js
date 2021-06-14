/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 直播插件配置

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1623490337188_2714';

  // add your middleware config here
  config.middleware = [];

  config.media = {
    rtmp: {
      port: 23480,
      chunk_size: 60000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 23481,
      allow_origin: '*'
    },
    auth: {
      api: true,
      api_user: 'admin',
      api_pass: 'admin',
      play: false,
      publish: false,
      secret: 'nodemedia2017privatekey'
    }
  }

  // 修改默认端口号
  config.cluster = {
    listen: {
      port: 5000,
      hostname: '0.0.0.0',
    },
  };
  config.security = {

    csrf: {
      enable: false,
    },
    domainWhiteList: []
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

// push address
// rtmp://127.0.0.1:1935/live/
// jCXGF6mISzxRXqhDyuV1?sign=1623647411-34f5f8c12ac532d144979b19322cd1c2
// pull address
// http://127.0.0.1:8000/live/jCXGF6mISzxRXqhDyuV1.flv?sign=1623647411-34f5f8c12ac532d144979b19322cd1c2