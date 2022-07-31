/*
|--------------------------------------------------------------------------
|
| hel 动态包的模块名称
|
|--------------------------------------------------------------------------
*/
// import { appGroupName } from '../../package.json'
// 如果从 package.json 直接导出appGroupName，
// rollup 打包需要配置 @rollup/plugin-json
// webpack 打包会把整个 package 对象打到运行代码里

export const LIB_NAME = 'hel-lodash';
// export const HEL_APP_GROUP_NAME = 'hel-lodash';

