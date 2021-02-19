export default (arr)=>{
	/*
		缺失的第一个正数
		1.过滤非正整数
		2.数组不能为空
		3.排序 - 升序 说明 ：方便从左到右取最小值
		4.如果第一个元素 !== 1 
		5.从左边开始遍历 ，只要下一个元素和当前元素差值 > 1 说明当前元素的下一值 + 1
		6.如果数组是连续的正整数如[1,2,3,4,5,6,7],则.pop + 1
	*/
	// arr = arr.filter(item => item > 0);
	// if(arr.length){
	// 	arr.sort((a,b)=>{return a-b});
	// 	if(arr[0] !== 1) {
	// 		return 1
	// 	}else {
	// 		for(let i=0,len = arr.length -1 ; i<len; i++){
	// 			if( arr[i+1] - arr[i] >1 ){
	// 				return arr[i] + 1
	// 			}
	// 		}
	// 		return arr.pop() + 1
	// 	}
	// }

	arr = arr.filter(item => item >0);
	if(arr.length){
		for(let i=0,len = arr.length,min; i<len; i++){
			min = arr[i];
			for(let j = i + 1; j<len;j++){
				if(arr[j] < min){
					let c = min;
					min = arr[j];
					arr[j] = c;
				}
			}
			//记录最小值
			arr[i] = min;
			//如果 i > 0 的话 说明 至少遍历 2次
			if(i>0){
				if( arr[i] - arr[i-1] > 1){
					return arr[i-1] + 1
				}
			}else{
				if (min !== 1){
					return 1
				}
			}
		}
	}
	return arr.length ? arr.pop() + 1 : 0
}