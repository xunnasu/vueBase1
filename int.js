// 2000的阶乘能被3整除的所有数字
var arr = []
for(var i = 0; i <arr.length; i++){ 
  if(i % 3 == 0){
   arr.push(i)
  }
}
console.log('arr :>> ', arr);


// var sum = 0 
// let arr = [2,3,4]
// for(var i = 0 ; i <arr.length;i++){
  
//   sum += arr[i]
// }
// console.log('sum :>> ', sum);

// 冒泡排序
// 不断比较两个相邻的元素,将较大的往后移
// 第一组遍历每一个元素
// 第二组遍历为找到最大值向后移动
// var arr = [2,3,4,54,56,8,9,9,99]
// function bubbind(arr){
//   for(var i = 0; i <arr.length;i++){
//     for(var j = 0 ; j <arr.length -i-1;j++){
//       if(arr[j] > arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr
// }
// console.log('bubbing(arr) :>> ', bubbind(arr));

// 选择排序
// 第一遍循环遍历每个元素
// 第二遍循环 用来找到最小元素的下标,并于第一遍循环的节点进行交换
// 选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
// var arr = [12,3,4,6,7,8,1,5]
// function select(arr){
//   for(var i = 0 ;i <arr.length;i++){
//     let minIndex = i
//     for(var j = i ; j <arr.length;j++){
//       if(arr[j] < arr[minIndex]){
//         minIndex = j
//       }
//     }
//     [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//   }
//   return arr
// }
// console.log('select(arr) :>> ', select(arr));
// function quickSort(arr) {
//   if(arr.length <=1) {
//     return arr;
//   }
//   let mid =  Math.floor(arr.length / 2); //随机取中间值
//   let midData = arr.splice(mid,1)[0]
//   console.log('midData :>> ', midData);
//   // let middleData = arr.splice(middle, 1)[0]
//   let left = [];
//   let right = [];
//   for(let i = 0; i < arr.length; i++) {
//     // 判断当前值大于中间值 就往右边放 ，否则就放在左边
//     // 然后再利用递归 再把左右的值和中间的值，右边的值放进去，进行比较
//     if(arr[i] > midData) {
//       right.push(arr[i])
//     }else {
//       left.push(arr[i])
//     }
//   }
//   return [...quickSort(left), midData, ...quickSort(right)]
// }
// console.log('object :>> ', quickSort(arr));

