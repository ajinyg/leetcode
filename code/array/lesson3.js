export default (arr,n)=>{
	let max = 0;
	for ( let i=0,len=arr.length;i<len;i++ ){

		/*
			[1,0,0,0,1,0,0]
			   1 2 3   5 6
		*/
		if ( arr[i] === 0 ) {
			/*
				处理只有一位的情况
				长度 && 值(0) && i(0)
			*/ 
			if(i===0 && arr[0]===0 && arr.length === 1 ){
				max++
			}
			/*
				处理边界
				如果最后一位 也为0的情况
				i === arr.length-1 && arr[(arr.length-1) -1 ]最后一位的上一位 === 0，即满足条件
			*/ 
			if ( i === arr.length-1 && arr[(arr.length-1) - 1] === 0){
				max++
			}
			/*
				处理边界
				如果当前第一位 为0 && 下一个位置 也为0 的时候 ，即可以种
			*/
			if ( i === 0 && arr[1] === 0 ){
				max++ //计数
				/*
					如果第一位为0 && 第二位也为0，即 i + 1 ，（保留当前位置）跳入下一个位置
				*/  
				i++  
			/*
				检查上一位置 与下一位置 是否为 0，如果满足条件 即可以种
			*/
			}
			if (arr[i-1] === 0 && arr[i+1] === 0 ){
				max++
				i++
			}

		}
	}
	console.log(max,`max`)
	return max >= n;
}