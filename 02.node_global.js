/* 
* Node端
* 1.没有了BOM ----->  因为服务器不需要（服务端没有浏览器对象）
* 2.没有了DOM ----->  因为没有浏览器窗口
* 3.几乎包含了所有的ES规范
* 4.没有了window，但是取而代之的是一个叫做global的全局变量。
*/

console.log(this); // {}, 在node中禁止函数的this指向global
console.log(global);