
// 1. Node中任何一个模块（js文件）都被一个外层函数所包裹
console.log(arguments.callee.toString()) //输出外层函数

/**
 * @param {object} exports 用于支持CommonJs模块化规范的暴露语法
 * @param {object} require 用于支持CommonJs模块化规范的引入语法
 * @param {object} module 用于支持CommonJs模块化规范的暴露语法
 * @param {string} __filename：当前运行文件的绝对路径
 * @param {string} __dirname：当前运行文件所在文件夹的绝对路径
 */
// 2. 为什么要设计这个外层函数? 支持模块化，隐藏服务器内部实现

// /run/media/gtto/Data/web/xander/node-full/01.node_outer_function.js
console.log(__filename)

// /run/media/gtto/Data/web/xander/node-full
console.log(__dirname)
