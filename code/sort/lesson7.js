export default (arr)=>{
	/*
		基础快速排序一
		说明 ：定义一个标尺， 小的放左边，大的放右边
		思路 ：递归
	*/
	//  let _sort = (arr) =>{
	//  	let len = arr.length;
	//  	if(len < 2) {
	//  		return arr;
	//  	}else {
	//  		var flag = arr[0];
	//  		var left = [];
	//  		var right = [];
	//  		for( let i=1,tmp;i<len;i++ ){
	//  			tmp = arr[i];
	//  			if( tmp < flag){
	//  				left.push(tmp)
	//  			}else{
	//  				right.push(tmp)
	//  			}
	//  		}
	//  	}
	//  	return _sort(left).concat(flag,_sort(right))
	//  } 
	// return _sort(arr);

	/*
		快速排序二（划分交换排序）
	*/ 
	//位置交换
	let swap = (arr,i,j) => {
		let tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	//查找中间下标值
	let findCenterIndex = (arr,left,right) =>{
		let flag = arr[left];
		/*
			演示 : left = 0
			也就是需要从第left + 1 第二位开始
		*/
		let index = left + 1;
		for(let i=index;i<=right;i++){
			if(arr[i] < flag){
				swap(arr,index,i);
				index++
			}
		}
		swap(arr,left,index -1)
		return index;
	}
	//递归排序
	let _sort = (arr,left,right) =>{
		if(left < right){
			let center = findCenterIndex(arr,left,right);
			//左边递归
			_sort(arr,left,center-1);
			//右边递归
			_sort(arr,center,right);
		}
	}
	_sort(arr,0,arr.length - 1)
	return arr;
}