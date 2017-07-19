/**
 * Created by wangxuquan on 2017/7/19.
 */
var server = require('pushstate-server');

server.start({
    port: 3000,
    directory: './build'
});