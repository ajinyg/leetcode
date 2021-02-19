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
	arr = arr.filter(item => item > 0);
	if(arr.length){
		arr.sort((a,b)=>{return a-b});
		if(arr[0] !== 1) {
			return 1
		}else {
			for(let i=0,len = arr.length -1 ; i<0; i++){
				if( arr[i+1] - arr[i] >1 ){
					return arr[i] + 1
				}
			}
			return arr.pop() + 1
		}
	}
}