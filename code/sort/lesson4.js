// export default (arr,k)=>{
// 	return arr.sort((a,b)=>b-a)[k-1];
// }
/*
	一定要吃透基础的排序算法，
	它是所有的变种排序的基石，
	在这个基础上可以改造出性能非常好的这么一个方法。
*/
export default (arr,k) => {
	let len = arr.length - 1;
	for( let i = len,tmp; i > len-k; i--){
		for( let j=0;j<i; j++){
			if(arr[j] > arr[j+1]){
				//记录临时变量
				tmp = arr[j];
				//排序交换位置 ， 最小值，最大值交换位置
				arr[j] = arr[j+1]; // 最大值 
				arr[j+1] = tmp; // 最小值
			}
		}
	}
	return arr[len - (k-1)];
}