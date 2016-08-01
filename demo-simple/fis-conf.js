 fis.match('::packager', {
   spriter: fis.plugin('csssprites')
 });

 fis.match('*', {
   useHash: false
 });

 fis.match('*.js', {
 	// 添加md5戳
 	//useHash:true,
 	// 通过内置的fis-optimizer-uglify-js插件压缩 js 
    optimizer: fis.plugin('uglify-js'),
    //发布到/static/js/xxx目录下
    release : '/static/js/$0'
 });

 fis.match('*.css', {
   useSprite: true,
   optimizer: fis.plugin('clean-css'),
   release : '/static/css/$0'
 });

 fis.match('*.png', {
 	// 压缩png图片
   optimizer: fis.plugin('png-compressor')
 });

 fis.config.set('pack', {
    '/pkg/lib.js': [
        'js/lib/jquery.js',
        'js/lib/underscore.js',
        'js/lib/backbone.js',
        'js/lib/backbone.localStorage.js',
    ]
});