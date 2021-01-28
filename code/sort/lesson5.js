// export default (arr)=>{
// 	/*
// 		处理边界
// 		条件：如果数组元素小于2，则返回 0 
// 	*/
// 	if ( arr.length < 2 ) {
// 		return 0
// 	}
// 	//排序
// 	arr.sort((a,b)=>a-b);
// 	//保存相邻元素的最大差值
// 	let max = 0;
// 	for( let i=0,len = arr.length,tmp;i<len; i++){
// 		tmp = arr[i + 1] - arr[i];
// 		if(tmp > max){
// 			max = tmp;
// 		}
// 	}
// 	return max;
// }
export default (arr)=>{
	//处理边界
	if ( arr.length < 2 ){
		return 0
	}
	let max = 0;
	let len = arr.length - 1;
	let compare;
	for (let i=len,tmp; i>0;i-- ) {
		for(let j=0;j<i;j++){
			tmp = arr[j];
			if (tmp > arr[j+1]){
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
		//i < len , 找到排好后的前一位， 相当于 i 必须小于长度
		if ( i < len ) {
			compare = arr[i+1] - arr[i];
			if ( compare > max ){
				max = compare
			}
		}
	}
	return Math.max(max,arr[1]-arr[0]);
}