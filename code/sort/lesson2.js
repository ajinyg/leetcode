export default (arr)=>{
	for( let i=0,len=arr.length,min;i<len;i++){
		//记录当前数字，便于最小值去做比较
		min = arr[i];
		for(let j=i+1;j<len;j++){
			if(arr[j] < min){
				let c = min; 
				min = arr[j];
				arr[j] = c;
			}
		}
		arr[i] = min;
	}
	return arr;
}