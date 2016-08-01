// fis.config.set('deploy.xxx', [{
//     // 本服务部署地址
//     receiver: 'http://172.16.16.251:9919/okay-upload',
//     // 本地项目要部署的某个文件夹
//     from: '/img',
//     // 部署至服务器路径, 建议从根路径写起
//     to: '/upload/img/'
// }]);
fis.match('img/*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://172.16.16.251:9919/okay-upload',
    to: '/Users/alan/mine/work/okay/okay-upload2/okay-upload/' // 注意这个是指的是测试机器的路径，而非本地机器
  })
})