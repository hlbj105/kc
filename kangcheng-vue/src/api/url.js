var ENV = 'prod' // 控制开关,dev 开发环境，release,master环境时改为 prod
export default {
  pathUrl: function () {
    var URLS = {
      dev: {
        MJK: '/api',
        WEB_URL: {
          WEB_MIAO: 'http://127.0.0.1:3000'
        }
      },
      prod: {
        MJK: 'https://kc.hcode.xyz/api',
        WEB_URL: {
          WEB_MIAO: 'https://kc.hcode.xyz'
        }
      }
    }
    return URLS[ENV]
  }
}
