export default (arr) => {
	/*
		时间复杂度 ： 计算的是运行的次数
		空间复杂度 ： 计算的是运行的内存
	*/ 
	//冒泡排序
	for( let i = arr.length -1 ,tmp; i>0; i-- ){
		for( let j = 0; j<i; j++ ){
			tmp = arr[j];
			if (tmp > arr[j+1]){
				arr[j] = arr[j+1];
				arr[j+1] = tmp
			}
		}
	}
	return arr;
}